import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataTable } from '../components/ui/DataTable'
import { Chip } from '../components/ui/Chip'
import type { Column } from '../components/ui/DataTable'

type User = {
  id: number
  name: string
  email: string
  role: string
  status: string
  lastLogin: string
}

const users: User[] = [
  { id: 1, name: 'Juan Pérez', email: 'juan@mail.com', role: 'Admin', status: 'Activo', lastLogin: '2026-06-15' },
  { id: 2, name: 'María García', email: 'maria@mail.com', role: 'Editor', status: 'Activo', lastLogin: '2026-06-14' },
  { id: 3, name: 'Carlos López', email: 'carlos@mail.com', role: 'Usuario', status: 'Inactivo', lastLogin: '2026-05-20' },
  { id: 4, name: 'Ana Martínez', email: 'ana@mail.com', role: 'Admin', status: 'Pendiente', lastLogin: '2026-06-10' },
  { id: 5, name: 'Pedro Rodríguez', email: 'pedro@mail.com', role: 'Editor', status: 'Activo', lastLogin: '2026-06-13' },
  { id: 6, name: 'Lucía Fernández', email: 'lucia@mail.com', role: 'Usuario', status: 'Inactivo', lastLogin: '2026-04-01' },
  { id: 7, name: 'Diego Sánchez', email: 'diego@mail.com', role: 'Usuario', status: 'Activo', lastLogin: '2026-06-16' },
  { id: 8, name: 'Sofía Torres', email: 'sofia@mail.com', role: 'Editor', status: 'Pendiente', lastLogin: '2026-06-12' },
]

const statusVariant: Record<string, 'success' | 'warning' | 'error' | 'default'> = {
  Activo: 'success',
  Pendiente: 'warning',
  Inactivo: 'error',
}

const columns: Column<User>[] = [
  { key: 'name', header: 'Nombre', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'role', header: 'Rol', sortable: true },
  {
    key: 'status',
    header: 'Estado',
    sortable: true,
    render: (row) => <Chip variant={statusVariant[row.status] ?? 'default'} size="sm">{row.status}</Chip>,
  },
  { key: 'lastLogin', header: 'Último acceso', sortable: true },
]

const meta: Meta<typeof DataTable> = {
  title: 'UI/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    striped: { control: 'boolean' },
    scrollable: { control: 'boolean' },
    loading: { control: 'boolean' },
    stickyFirst: { control: 'boolean' },
    selection: { control: 'select', options: ['none', 'single', 'multiple'] },
    density: { control: 'select', options: ['comfortable', 'compact'] },
  },
}

export default meta
type Story = StoryObj<typeof DataTable<User>>

export const Default: Story = {
  args: {
    columns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 5,
  },
}

export const Striped: Story = {
  args: {
    columns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 10,
    striped: true,
  },
}

export const WithMultipleSelection: Story = {
  args: {
    columns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 10,
    selection: 'multiple',
    selected: [1, 3, 5],
  },
}

export const WithSingleSelection: Story = {
  args: {
    columns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 10,
    selection: 'single',
    selected: [3],
  },
}

export const Compact: Story = {
  args: {
    columns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 10,
    density: 'compact',
  },
}

export const Loading: Story = {
  args: {
    columns,
    data: [],
    keyExtractor: (u) => u.id,
    pageSize: 10,
    loading: true,
  },
}

export const WithToolbarActions: Story = {
  args: {
    columns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 10,
  },
}

export const Expandable: Story = {
  args: {
    columns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 5,
    renderExpanded: (user) => (
      <div className="grid grid-cols-3 gap-4 p-3">
        <div>
          <p className="text-xs font-medium text-muted-foreground">Email</p>
          <p className="mt-0.5 text-sm text-foreground">{user.email}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground">Rol</p>
          <p className="mt-0.5 text-sm text-foreground">{user.role}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground">Estado</p>
          <div className="mt-0.5">
            <Chip variant={statusVariant[user.status] ?? 'default'} size="sm">{user.status}</Chip>
          </div>
        </div>
      </div>
    ),
  },
}
