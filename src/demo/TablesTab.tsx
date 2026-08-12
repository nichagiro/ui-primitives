import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Chip } from '../components/ui/Chip'
import { DataTable } from '../components/ui/DataTable'
import { type CellEditPayload, type Column } from '../components/ui/DataTable'
import { users, columns, type User } from './mockData'

const roleOptions = [
  { value: 'Admin', label: 'Admin' },
  { value: 'Editor', label: 'Editor' },
  { value: 'Viewer', label: 'Viewer' },
  { value: 'Manager', label: 'Manager' },
  { value: 'Contributor', label: 'Contributor' },
]

const statusOptions = [
  { value: 'Activo', label: 'Activo' },
  { value: 'Inactivo', label: 'Inactivo' },
  { value: 'Pendiente', label: 'Pendiente' },
]

const statusVariant: Record<string, 'success' | 'error' | 'warning'> = {
  Activo: 'success',
  Inactivo: 'error',
  Pendiente: 'warning',
}

const editableColumns: Column<User>[] = [
  { header: 'Nombre', key: 'name', sortable: true, className: 'min-w-48', editable: { type: 'input' } },
  { header: 'Email', key: 'email', sortable: true, editable: { type: 'input', inputType: 'email' } },
  { header: 'Rol', key: 'role', sortable: true, editable: { type: 'select', options: roleOptions } },
  { header: 'Activo', key: 'active', sortable: true, editable: { type: 'check' } },
  {
    header: 'Estado',
    key: 'status',
    editable: { type: 'select', options: statusOptions },
    render: (row) => (
      <Chip variant={statusVariant[row.status] ?? 'default'} size="sm">
        {row.status}
      </Chip>
    ),
    sortable: true,
  },
  { header: 'Departamento', key: 'department', sortable: true },
  { header: 'Ubicación', key: 'location', sortable: true },
]

type TablesTabProps = {
  onSelectedUserChange: (user: User | null) => void
  onModalOpenChange: (open: boolean) => void
}

export function TablesTab({ onSelectedUserChange, onModalOpenChange }: TablesTabProps) {
  const [multipleSelected, setMultipleSelected] = useState<(string | number)[]>([1, 3, 5, 10])
  const [singleSelected, setSingleSelected] = useState<(string | number)[]>([3])
  const [tableLoading, setTableLoading] = useState(false)
  const [editableUsers, setEditableUsers] = useState<User[]>(() => users.map((u) => ({ ...u })))

  function handleCellEdit({ updatedRow }: CellEditPayload<User>) {
    setEditableUsers((prev) => prev.map((u) => (u.id === updatedRow.id ? updatedRow : u)))
  }

  return (
    <>
      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Expandible</h2>
        <DataTable
          columns={columns}
          data={users}
          keyExtractor={(u) => u.id}
          pageSize={5}
          renderExpanded={(user) => (
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
                <p className="mt-0.5 text-sm text-foreground">{user.status}</p>
              </div>
            </div>
          )}
        />
      </section>

      <section>
        <DataTable
          columns={columns}
          data={[]}
          keyExtractor={(u) => u.id}
          pageSize={10}
        />
      </section>

      <section>
        <div className="mb-2 flex items-center justify-end gap-2">
          <Button colorScheme='success' size="sm" onClick={() => alert('Exportando a Excel...')}>
            Excel
          </Button>
        </div>
        <DataTable
          columns={columns}
          data={users}
          keyExtractor={(u) => u.id}
          colorScheme='danger'
          pageSize={10}
          selection="multiple"
          selected={multipleSelected}
          onSelectionChange={setMultipleSelected}
        />
      </section>

      <section>
        <DataTable
          columns={columns}
          data={users}
          keyExtractor={(u) => u.id}
          pageSize={10}
        />
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setTableLoading(!tableLoading)}>
            {tableLoading ? 'Detener carga' : 'Simular carga'}
          </Button>
        </div>
        <DataTable
          columns={columns}
          data={tableLoading ? [] : users}
          striped
          selection='single'
          keyExtractor={(u) => u.id}
          selected={singleSelected}
          onSelectionChange={setSingleSelected}
          scrollable
          loading={tableLoading}
        />
      </section>

      <section>
        <DataTable
          columns={columns}
          data={users}
          keyExtractor={(u) => u.id}
          pageSize={5}
          density="compact"
          stickyFirst
          onRowClick={(user) => { onSelectedUserChange(user); onModalOpenChange(true) }}
        />
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Clases por fila</h2>
        <DataTable
          columns={columns}
          data={users}
          keyExtractor={(u) => u.id}
          pageSize={10}
          rowClassName={(u) =>
            u.status === 'Pendiente' ? 'bg-yellow-50' :
              u.status === 'Inactivo' ? 'bg-red-50' : 'bg-green-50'
          }
        />
      </section>

      <section>
        <div className="mb-2">
          <h2 className="text-lg font-semibold text-foreground">Edición inline</h2>
          <p className="text-sm text-muted-foreground">
            Doble-click en una celda o haz click en el lápiz que aparece al pasar el mouse.
            Input (Nombre/Email), Select (Rol) y Check (Activo) renderizan elementos nativos con el tema.
          </p>
        </div>
        <DataTable
          columns={editableColumns}
          data={editableUsers}
          keyExtractor={(u) => u.id}
          pageSize={10}
          onCellEdit={handleCellEdit}
        />
      </section>
    </>
  )
}
