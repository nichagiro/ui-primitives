import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { DataTable } from '../components/ui/DataTable'
import { users, columns, type User } from './mockData'

type TablesTabProps = {
  onSelectedUserChange: (user: User | null) => void
  onModalOpenChange: (open: boolean) => void
}

export function TablesTab({ onSelectedUserChange, onModalOpenChange }: TablesTabProps) {
  const [multipleSelected, setMultipleSelected] = useState<(string | number)[]>([1, 3, 5, 10])
  const [singleSelected, setSingleSelected] = useState<(string | number)[]>([3])
  const [tableLoading, setTableLoading] = useState(false)

  return (
    <>
      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Expandible</h2>
        <DataTable
          columns={columns}
          data={users}
          keyExtractor={(u) => u.id}
          selection='multiple'
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
          card
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
          card
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
          card
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
          card
          density="compact"
          stickyFirst
          onRowClick={(user) => { onSelectedUserChange(user); onModalOpenChange(true) }}
        />
      </section>
    </>
  )
}
