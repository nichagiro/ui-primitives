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
  age: number
}

const users: User[] = [
  { id: 1, name: 'Juan Pérez', email: 'juan@mail.com', role: 'Admin', status: 'Activo', lastLogin: '2026-06-15', age: 30 },
  { id: 2, name: 'María García', email: 'maria@mail.com', role: 'Editor', status: 'Activo', lastLogin: '2026-06-14', age: 28 },
  { id: 3, name: 'Carlos López', email: 'carlos@mail.com', role: 'Usuario', status: 'Inactivo', lastLogin: '2026-05-20', age: 35 },
  { id: 4, name: 'Ana Martínez', email: 'ana@mail.com', role: 'Admin', status: 'Pendiente', lastLogin: '2026-06-10', age: 32 },
  { id: 5, name: 'Pedro Rodríguez', email: 'pedro@mail.com', role: 'Editor', status: 'Activo', lastLogin: '2026-06-13', age: 27 },
  { id: 6, name: 'Lucía Fernández', email: 'lucia@mail.com', role: 'Usuario', status: 'Inactivo', lastLogin: '2026-04-01', age: 29 },
  { id: 7, name: 'Diego Sánchez', email: 'diego@mail.com', role: 'Usuario', status: 'Activo', lastLogin: '2026-06-16', age: 31 },
  { id: 8, name: 'Sofía Torres', email: 'sofia@mail.com', role: 'Editor', status: 'Pendiente', lastLogin: '2026-06-12', age: 26 },
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
    scrollHeight: { control: 'number' },
    loading: { control: 'boolean' },
    stickyFirst: { control: 'boolean' },
    selection: { control: 'select', options: ['none', 'single', 'multiple'] },
    density: { control: 'select', options: ['comfortable', 'compact'] },
    expandOnRowClick: { control: 'boolean' },
    rowClassName: { control: false },
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

export const CustomRowClasses: Story = {
  args: {
    columns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 10,
    rowClassName: (user) => (user.status === 'Inactivo' ? 'opacity-60' : ''),
  },
}

export const ExpandableWithSelection: Story = {
  args: {
    columns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 5,
    selection: 'multiple',
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

export const DisabledRows: Story = {
  args: {
    columns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 10,
    selection: 'multiple',
    disabledRows: [3, 6],
  },
}

const editableColumns: Column<User>[] = [
  { key: 'name', header: 'Nombre', sortable: true, editable: { type: 'input' } },
  { key: 'email', header: 'Email', sortable: true },
  {
    key: 'role',
    header: 'Rol',
    sortable: true,
    editable: {
      type: 'select',
      options: [
        { value: 'Admin', label: 'Admin' },
        { value: 'Editor', label: 'Editor' },
        { value: 'Usuario', label: 'Usuario' },
      ],
    },
  },
  {
    key: 'status',
    header: 'Estado',
    sortable: true,
    render: (row) => <Chip variant={statusVariant[row.status] ?? 'default'} size="sm">{row.status}</Chip>,
    editable: { type: 'check' },
  },
  { key: 'lastLogin', header: 'Último acceso', sortable: true },
]

export const Editable: Story = {
  args: {
    columns: editableColumns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 5,
    onCellEdit: (payload) => {
      console.log('Cell edited', payload)
    },
  },
}

function makeLargeUsers(n: number): User[] {
  const roles = ['Admin', 'Editor', 'Usuario']
  const statuses = ['Activo', 'Pendiente', 'Inactivo']
  return Array.from({ length: n }, (_, i) => ({
    id: i + 1,
    name: `Usuario ${i + 1}`,
    email: `usuario${i + 1}@mail.com`,
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    lastLogin: `2026-06-${(i % 28) + 1}`,
    age: 20 + (i % 50),
  }))
}

export const ScrollableLargeDataset: Story = {
  tags: ['skip-test'],
  args: {
    columns,
    data: makeLargeUsers(5000),
    keyExtractor: (u) => u.id,
    scrollable: true,
    scrollHeight: 400,
    rowHeight: 49,
  },
}

export const ScrollableWithExpand: Story = {
  args: {
    columns,
    data: makeLargeUsers(50),
    keyExtractor: (u) => u.id,
    scrollable: true,
    scrollHeight: 400,
    renderExpanded: (row) => (
      <div className="space-y-1 text-sm">
        <div><span className="font-medium">Email:</span> {row.email}</div>
        <div><span className="font-medium">Rol:</span> {row.role}</div>
        <div><span className="font-medium">Último acceso:</span> {row.lastLogin}</div>
      </div>
    ),
  },
}

const editableWithPropsColumns: Column<User>[] = [
  { key: 'name', header: 'Nombre', sortable: true, editable: { type: 'input', props: { placeholder: 'Escribe nombre...', maxLength: 50 } } },
  { key: 'email', header: 'Email', sortable: true, editable: { type: 'input', props: { type: 'email', placeholder: 'email@ejemplo.com' } } },
  {
    key: 'age',
    header: 'Edad',
    sortable: true,
    editable: { type: 'input', props: { type: 'number', min: 0, max: 120, step: 1, placeholder: 'Edad' } },
  },
  {
    key: 'role',
    header: 'Rol',
    sortable: true,
    editable: {
      type: 'select',
      options: [
        { value: 'Admin', label: 'Admin' },
        { value: 'Editor', label: 'Editor' },
        { value: 'Usuario', label: 'Usuario' },
      ],
    },
  },
]

export const EditableWithInputProps: Story = {
  args: {
    columns: editableWithPropsColumns,
    data: users,
    keyExtractor: (u) => u.id,
    pageSize: 5,
    onCellEdit: (payload) => {
      console.log('Cell edited', payload)
    },
  },
}
