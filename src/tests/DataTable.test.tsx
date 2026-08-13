import { render, screen, within, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { DataTable } from '../components/ui/DataTable'
import type { Column, CellEditPayload } from '../components/ui/DataTable'

type User = { id: number; name: string; email: string; active: boolean; role: string }
const columns: Column<User>[] = [
  { key: 'name', header: 'Nombre' },
  { key: 'email', header: 'Email' },
]
const users: User[] = [
  { id: 1, name: 'Juan', email: 'juan@mail.com', active: true, role: 'Admin' },
  { id: 2, name: 'María', email: 'maria@mail.com', active: false, role: 'Editor' },
]

function makeUsers(n: number): User[] {
  return Array.from({ length: n }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@mail.com`,
    active: i % 2 === 0,
    role: 'User',
  }))
}

function dataRows(): number {
  const tbody = document.querySelector('tbody')!
  return Array.from(tbody.querySelectorAll('tr')).filter(
    (r) => r.querySelectorAll('td').length > 1,
  ).length
}

describe('DataTable', () => {
  it('renders headers', () => {
    render(<DataTable columns={columns} data={users} keyExtractor={(u) => u.id} />)
    expect(screen.getByText('Nombre')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('renders data rows', () => {
    render(<DataTable columns={columns} data={users} keyExtractor={(u) => u.id} />)
    expect(screen.getByText('Juan')).toBeInTheDocument()
    expect(screen.getByText('María')).toBeInTheDocument()
  })

  it('shows empty content when no data', () => {
    render(<DataTable columns={columns} data={[]} keyExtractor={(u) => u.id} />)
    expect(screen.getByText('Sin resultados')).toBeInTheDocument()
  })

  it('expands and collapses row on toggle click', async () => {
    const user = userEvent.setup()
    render(
      <DataTable
        columns={columns}
        data={users}
        keyExtractor={(u) => u.id}
        renderExpanded={(row) => <div data-testid={`expanded-${row.id}`}>{row.email}</div>}
      />
    )

    const toggle = screen.getAllByRole('button', { name: 'Expandir' })
    expect(toggle).toHaveLength(2)

    await user.click(toggle[0])
    expect(screen.getByTestId('expanded-1')).toBeInTheDocument()

    await user.click(toggle[0])
    expect(screen.queryByTestId('expanded-1')).not.toBeInTheDocument()
  })

  it('expands on row click when there is no selection', async () => {
    const user = userEvent.setup()
    render(
      <DataTable
        columns={columns}
        data={users}
        keyExtractor={(u) => u.id}
        renderExpanded={(row) => <div data-testid={`expanded-${row.id}`}>{row.email}</div>}
      />
    )

    await user.click(screen.getByText('Juan'))
    expect(screen.getByTestId('expanded-1')).toBeInTheDocument()
    expect(screen.queryByTestId('expanded-2')).not.toBeInTheDocument()

    await user.click(screen.getByText('María'))
    expect(screen.getByTestId('expanded-2')).toBeInTheDocument()
  })

  it('does not expand on row click when selection is enabled', async () => {
    const user = userEvent.setup()
    render(
      <DataTable
        columns={columns}
        data={users}
        keyExtractor={(u) => u.id}
        selection="multiple"
        renderExpanded={(row) => <div data-testid={`expanded-${row.id}`}>{row.email}</div>}
      />
    )

    await user.click(screen.getByText('Juan'))
    expect(screen.queryByTestId('expanded-1')).not.toBeInTheDocument()
  })

  it('respects expandOnRowClick={false}', async () => {
    const user = userEvent.setup()
    render(
      <DataTable
        columns={columns}
        data={users}
        keyExtractor={(u) => u.id}
        renderExpanded={(row) => <div data-testid={`expanded-${row.id}`}>{row.email}</div>}
        expandOnRowClick={false}
      />
    )

    await user.click(screen.getByText('Juan'))
    expect(screen.queryByTestId('expanded-1')).not.toBeInTheDocument()
  })

  it('applies rowClassName per row', () => {
    render(
      <DataTable
        columns={columns}
        data={users}
        keyExtractor={(u) => u.id}
        rowClassName={(u) => (u.id === 1 ? 'custom-row-1' : '')}
      />
    )

    const rows = screen.getAllByRole('row')
    const row1 = rows.find((r) => r.textContent?.includes('Juan'))
    const row2 = rows.find((r) => r.textContent?.includes('María'))

    expect(row1).toHaveClass('custom-row-1')
    expect(row2).not.toHaveClass('custom-row-1')
  })

  it('respects controlled expanded prop', () => {
    const { rerender } = render(
      <DataTable
        columns={columns}
        data={users}
        keyExtractor={(u) => u.id}
        renderExpanded={(row) => <div data-testid={`expanded-${row.id}`}>{row.email}</div>}
        expanded={[1]}
        onExpandedChange={() => {}}
      />
    )

    expect(screen.getByTestId('expanded-1')).toBeInTheDocument()
    expect(screen.queryByTestId('expanded-2')).not.toBeInTheDocument()

    rerender(
      <DataTable
        columns={columns}
        data={users}
        keyExtractor={(u) => u.id}
        renderExpanded={(row) => <div data-testid={`expanded-${row.id}`}>{row.email}</div>}
        expanded={[2]}
        onExpandedChange={() => {}}
      />
    )

    expect(screen.queryByTestId('expanded-1')).not.toBeInTheDocument()
    expect(screen.getByTestId('expanded-2')).toBeInTheDocument()
  })

  it('edits a cell via double-click and commits on blur', async () => {
    const user = userEvent.setup()
    const onCellEdit = vi.fn()
    const editableColumns: Column<User>[] = [
      { key: 'name', header: 'Nombre', editable: { type: 'input' } },
      { key: 'email', header: 'Email' },
    ]

    render(
      <DataTable
        columns={editableColumns}
        data={users}
        keyExtractor={(u) => u.id}
        onCellEdit={onCellEdit}
      />
    )

    const nameCell = screen.getByText('Juan').closest('td')!
    await user.dblClick(within(nameCell).getByText('Juan'))

    const input = within(nameCell).getByRole('textbox')
    await user.clear(input)
    await user.type(input, 'Juanito')
    await user.click(screen.getByText('Email'))

    expect(onCellEdit).toHaveBeenCalledTimes(1)
    const payload = onCellEdit.mock.calls[0][0] as CellEditPayload<User>
    expect(payload.value).toBe('Juanito')
    expect(payload.columnKey).toBe('name')
    expect(payload.updatedRow).toEqual({ ...users[0], name: 'Juanito' })
  })

  it('does not commit an input editor when value is unchanged on blur', async () => {
    const user = userEvent.setup()
    const onCellEdit = vi.fn()
    const editableColumns: Column<User>[] = [
      { key: 'name', header: 'Nombre', editable: { type: 'input' } },
      { key: 'email', header: 'Email' },
    ]

    render(
      <DataTable
        columns={editableColumns}
        data={users}
        keyExtractor={(u) => u.id}
        onCellEdit={onCellEdit}
      />
    )

    const nameCell = screen.getByText('Juan').closest('td')!
    await user.dblClick(within(nameCell).getByText('Juan'))

    await user.click(screen.getByText('Email'))

    expect(onCellEdit).not.toHaveBeenCalled()
    expect(within(nameCell).queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('shows pencil icon on hover and edits on click', async () => {
    const user = userEvent.setup()
    const onCellEdit = vi.fn()
    const editableColumns: Column<User>[] = [
      { key: 'name', header: 'Nombre', editable: { type: 'input' } },
      { key: 'email', header: 'Email' },
    ]

    render(
      <DataTable
        columns={editableColumns}
        data={users}
        keyExtractor={(u) => u.id}
        editTrigger="icon"
        onCellEdit={onCellEdit}
      />
    )

    const nameCell = screen.getByText('Juan').closest('td')!
    await user.click(within(nameCell).getByRole('button', { name: 'Editar Nombre' }))

    const input = within(nameCell).getByRole('textbox')
    expect(input).toBeInTheDocument()

    await user.type(input, 'X')
    await user.keyboard('{Escape}')

    expect(onCellEdit).not.toHaveBeenCalled()
    expect(within(nameCell).queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('commits a select editor on change', async () => {
    const user = userEvent.setup()
    const onCellEdit = vi.fn()
    const editableColumns: Column<User>[] = [
      {
        key: 'role',
        header: 'Rol',
        editable: { type: 'select', options: [
          { value: 'Admin', label: 'Admin' },
          { value: 'Editor', label: 'Editor' },
        ] },
      },
      { key: 'email', header: 'Email' },
    ]

    render(
      <DataTable
        columns={editableColumns}
        data={users}
        keyExtractor={(u) => u.id}
        onCellEdit={onCellEdit}
      />
    )

    const roleCell = screen.getByText('Admin').closest('td')!
    await user.dblClick(within(roleCell).getByText('Admin'))

    const select = within(roleCell).getByRole('combobox') as HTMLSelectElement
    await user.selectOptions(select, 'Editor')

    expect(onCellEdit).toHaveBeenCalledTimes(1)
    const payload = onCellEdit.mock.calls[0][0] as CellEditPayload<User>
    expect(payload.value).toBe('Editor')
    expect(payload.updatedRow).toEqual({ ...users[0], role: 'Editor' })
  })

  it('commits a check editor with a boolean', async () => {
    const user = userEvent.setup()
    const onCellEdit = vi.fn()
    const editableColumns: Column<User>[] = [
      { key: 'active', header: 'Activo', editable: { type: 'check' } },
      { key: 'email', header: 'Email' },
    ]

    render(
      <DataTable
        columns={editableColumns}
        data={users}
        keyExtractor={(u) => u.id}
        onCellEdit={onCellEdit}
      />
    )

    const activeCell = screen.getAllByRole('cell')[0]
    await user.dblClick(activeCell)

    const checkbox = within(activeCell).getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(true)
    await user.click(checkbox)

    expect(onCellEdit).toHaveBeenCalledTimes(1)
    const payload = onCellEdit.mock.calls[0][0] as CellEditPayload<User>
    expect(payload.value).toBe(false)
  })

  it('scrollable renders only a window of rows, not the whole dataset', () => {
    const big = makeUsers(1000)
    render(
      <DataTable
        columns={columns}
        data={big}
        keyExtractor={(u) => u.id}
        scrollable="400px"
        rowHeight={40}
      />
    )

    const rows = dataRows()
    expect(rows).toBeGreaterThan(0)
    expect(rows).toBeLessThan(1000)
    expect(rows).toBe(16)
  })

  it('updates the visible window when scrolling', () => {
    const big = makeUsers(1000)
    render(
      <DataTable
        columns={columns}
        data={big}
        keyExtractor={(u) => u.id}
        scrollable="400px"
        rowHeight={40}
      />
    )

    const scroller = screen.getByTestId('dt-scroll')
    scroller.scrollTop = 2000
    fireEvent.scroll(scroller)

    expect(screen.queryByText('User 1')).not.toBeInTheDocument()
    expect(screen.getByText('User 45')).toBeInTheDocument()
    expect(screen.getByText('User 60')).toBeInTheDocument()
  })

  it('does not virtualize when scrollable and renderExpanded are both enabled', async () => {
    const user = userEvent.setup()
    const big = makeUsers(500)
    render(
      <DataTable
        columns={columns}
        data={big}
        keyExtractor={(u) => u.id}
        scrollable="400px"
        rowHeight={40}
        renderExpanded={(row) => <div data-testid={`expanded-${row.id}`}>{row.email}</div>}
      />
    )

    expect(dataRows()).toBe(500)

    const toggle = screen.getAllByRole('button', { name: 'Expandir' })[0]
    await user.click(toggle)
    expect(screen.getByTestId('expanded-1')).toBeInTheDocument()

    const scroller = screen.getByTestId('dt-scroll')
    scroller.scrollTop = 15000
    fireEvent.scroll(scroller)

    expect(screen.queryByText('User 1')).toBeInTheDocument()
    expect(screen.getByTestId('expanded-1')).toBeInTheDocument()
  })
})
