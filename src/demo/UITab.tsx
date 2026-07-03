import { useState, useMemo } from 'react'
import { Button } from '../components/ui/Button'
import { toast } from '../components/ui/Toast/toast-store'
import { Alert } from '../components/ui/Alert'
import { Chip } from '../components/ui/Chip'
import { Panel } from '../components/ui/Panel'
import { Modal } from '../components/ui/Modal'
import { Select } from '../components/form/Select'
import { paises, type User } from './mockData'

type UITabProps = {
  users: User[]
  selectedUser: User | null
  modalOpen: boolean
  onSelectedUserChange: (user: User | null) => void
  onModalOpenChange: (open: boolean) => void
}

export function UITab({ users, selectedUser, modalOpen, onSelectedUserChange, onModalOpenChange }: UITabProps) {
  const [btnLoading, setBtnLoading] = useState(false)
  const [chips, setChips] = useState(['React', 'Tailwind', 'TypeScript'])

  const userActions = useMemo(() => {
    if (!selectedUser) return 0
    return ((selectedUser.id * 13 + 7) % 50) + 5
  }, [selectedUser])

  return (
    <>
      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Button</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="solid" colorScheme="primary">Primary</Button>
          <Button variant="solid" colorScheme="secondary">Secondary</Button>
          <Button variant="solid" colorScheme="danger">Destructive</Button>
          <Button variant="ghost" colorScheme="primary">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button loading={btnLoading} onClick={() => { setBtnLoading(true); setTimeout(() => setBtnLoading(false), 2000) }}>
            {btnLoading ? 'Cargando...' : 'Click me'}
          </Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Button size="sm" colorScheme="info" onClick={() => toast.info('Esto es un mensaje informativo')}>Toast Info</Button>
          <Button size="sm" colorScheme="success" onClick={() => toast.success('Usuario creado correctamente')}>Toast Success</Button>
          <Button size="sm" colorScheme="warning" onClick={() => toast.warning('La sesión expirará pronto')}>Toast Warning</Button>
          <Button size="sm" colorScheme="danger" onClick={() => toast.error('Error al conectar con el servidor')}>Toast Error</Button>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Alert</h2>
        <div className="flex flex-col gap-3">
          <Alert variant="info" title="Información">Esto es un mensaje informativo.</Alert>
          <Alert variant="success" title="Éxito">Operación completada correctamente.</Alert>
          <Alert variant="warning" dismissible>Esto se puede cerrar.</Alert>
          <Alert variant="error" title="Error">Algo salió mal.</Alert>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Panel</h2>
        <div className="flex flex-col gap-4">
          <Panel title="Información general">
            Panel default sin colorScheme. Borde neutral y header gris.
          </Panel>
          <Panel colorScheme="primary" title="Primary Solid (default)">
            Panel con colorScheme primary en modo sólido.
          </Panel>
          <Panel colorScheme="primary" variant="soft" title="Primary Soft">
            Panel con colorScheme primary en modo suave.
          </Panel>
          <Panel colorScheme="success" title="Éxito">
            Operación completada correctamente.
          </Panel>
          <Panel colorScheme="danger">
            Panel en modo danger sin título.
          </Panel>
          <Panel title="Panel con Select">
            <Select label="País" placeholder="Seleccioná un país...">
              {paises.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
            </Select>
          </Panel>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Chip</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Chip variant="default">Default</Chip>
          <Chip variant="primary">Primary</Chip>
          <Chip variant="success">Success</Chip>
          <Chip variant="warning">Warning</Chip>
          <Chip variant="error">Error</Chip>
          <Chip size="sm">Small</Chip>
          {chips.map((chip, i) => (
            <Chip key={chip} variant="primary" onDismiss={() => setChips(prev => prev.filter((_, j) => j !== i))}>
              {chip}
            </Chip>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Modal</h2>
        <Button onClick={() => { onSelectedUserChange(users[0]); onModalOpenChange(true) }}>
          Ver detalles de usuario
        </Button>
        <Modal
          open={modalOpen}
          onClose={() => { onModalOpenChange(false); onSelectedUserChange(null) }}
          title={'Detalles del usuario'}
          size="lg"
          footer={
            <Button variant="soft" colorScheme="danger" onClick={() => { onModalOpenChange(false); onSelectedUserChange(null) }}>
              Guardar
            </Button>
          }
        >
          {selectedUser && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Nombre completo</p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">{selectedUser.name}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Email</p>
                  <p className="mt-0.5 text-sm text-foreground">{selectedUser.email}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Rol</p>
                  <p className="mt-0.5 text-sm text-foreground">{selectedUser.role}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Estado</p>
                  <div className="mt-0.5">
                    <Chip
                      variant={
                        selectedUser.status === 'Activo' ? 'success' :
                          selectedUser.status === 'Inactivo' ? 'error' : 'warning'
                      }
                      size="sm"
                    >
                      {selectedUser.status}
                    </Chip>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Último acceso</p>
                  <p className="mt-0.5 text-sm text-foreground">{selectedUser.lastLogin}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">ID</p>
                  <p className="mt-0.5 text-sm text-foreground">#{selectedUser.id}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Actividad reciente</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Este usuario ha completado {userActions} acciones en los últimos 30 días.
                  {selectedUser.status === 'Activo'
                    ? ' Su cuenta está al día y sin restricciones.'
                    : selectedUser.status === 'Inactivo'
                      ? ' Su cuenta requiere revisión.'
                      : ' Pendiente de aprobación por un administrador.'}
                </p>
              </div>
            </div>
          )}
        </Modal>
      </section>
    </>
  )
}
