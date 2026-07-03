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
