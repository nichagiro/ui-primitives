import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { DataTable } from '../components/ui/DataTable'
import type { Column } from '../components/ui/DataTable'

type User = { id: number; name: string; email: string }
const columns: Column<User>[] = [
  { key: 'name', header: 'Nombre' },
  { key: 'email', header: 'Email' },
]
const users: User[] = [
  { id: 1, name: 'Juan', email: 'juan@mail.com' },
  { id: 2, name: 'María', email: 'maria@mail.com' },
]

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
})
