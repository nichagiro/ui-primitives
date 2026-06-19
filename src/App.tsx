import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { Input } from './components/form/Input'
import { Select } from './components/form/Select'
import { TextArea } from './components/form/TextArea'
import { Check } from './components/form/Check'
import { RadioGroup } from './components/form/RadioGroup'
import { FileUpload } from './components/form/FileUpload'
import { Button } from './components/ui/Button'
import { toast } from './components/ui/Toast'
import { Alert } from './components/ui/Alert'
import { Chip } from './components/ui/Chip'
import { Modal } from './components/ui/Modal'
import { DataTable } from './components/ui/DataTable'
import { paises, users, columns, statusVariant, type User } from './demo/mockData'

type FormValues = {
  nombre: string
  pais: string
  paises: string[]
  comentarios: string
  terms: boolean
  notificaciones: boolean
  gender: string
  fecha: string
  hora: string
  archivos: File[]
}

function App() {
  const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>({
    defaultValues: {
      nombre: 'Juan Pérez',
      pais: 'mx',
      paises: paises.map(p => p.value),
      archivos: [],
    },
  })

  const [dark, setDark] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [chips, setChips] = useState(['React', 'Tailwind', 'TypeScript'])
  const [multipleSelected, setMultipleSelected] = useState<(string | number)[]>([1, 3, 5, 10])
  const [singleSelected, setSingleSelected] = useState<(string | number)[]>([3])
  const [tableLoading, setTableLoading] = useState(false)

  const userActions = useMemo(() => {
    if (!selectedUser) return 0
    return ((selectedUser.id * 13 + 7) % 50) + 5
  }, [selectedUser])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    setTimeout(() => {
      setValue("fecha", "1997-09-28", { shouldDirty: true });
      setValue("hora", "20:00", { shouldDirty: true });
      setValue("paises", ["co", "ar"], { shouldDirty: true });
    }, 1200);
  }, [dark, setValue])

  return (
    <div className="mx-auto flex min-h-svh max-w-5xl flex-col gap-8 bg-background p-6 text-foreground">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">ui-primitives</h1>
        <Button variant="ghost" size="sm" onClick={() => setDark(!dark)}>
          {dark ? 'Light' : 'Dark'}
        </Button>
      </div>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Formulario</h2>
        <form onSubmit={handleSubmit((data) => console.log(data))} className="flex w-full flex-col gap-6">
          <Input label="Nombre" placeholder="Tu nombre" {...register('nombre')} />
          <Select
            placeholder="Seleccioná un país"
            label="País"
            required
            searchable
            error={errors.pais?.message as string | undefined}
            {...register('pais', { required: 'Seleccioná un país' })}
          >
            {paises.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
          </Select>

          <Select
            placeholder="Elegí países"
            label="Países (multiple)"
            required
            multiple
            selectAll
            error={errors.paises?.message as string | undefined}
            {...register('paises', { required: 'Seleccioná un país' })}
          >
            {paises.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
          </Select>

          <Input type="date" label="Fecha" {...register('fecha')} />
          <Input type="time" label="Hora" {...register('hora')} />

          <FileUpload label="Adjuntar archivos" multiple accept=".pdf,.jpg,.png,.csv" maxSize={5 * 1024 * 1024} {...register('archivos')} />

          <TextArea label="Comentarios" placeholder="Escribí algo..." {...register('comentarios')} />

          <RadioGroup
            orientation='horizontal'
            label="Género"
            options={[
              { label: 'Masculino', value: 'm' },
              { label: 'Femenino', value: 'f' },
            ]}
            error={errors.gender?.message}
            {...register('gender', { required: 'Seleccioná un género' })}
          />

          <Check label="Acepto términos y condiciones" error={errors.terms?.message} {...register('terms', { required: 'Debes aceptar los términos' })} />
          <Check label="Recibir notificaciones" variant="switch" {...register('notificaciones')} />

          <Button type="submit">Enviar</Button>
        </form>
      </section>

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
        <Button onClick={() => { setSelectedUser(users[0]); setModalOpen(true) }}>
          Ver detalles de usuario
        </Button>
        <Modal
          open={modalOpen}
          onClose={() => { setModalOpen(false); setSelectedUser(null) }}
          title={'Detalles del usuario'}
          size="lg"
          footer={
            <Button variant="soft" colorScheme="danger" onClick={() => { setModalOpen(false); setSelectedUser(null) }}>
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
                    <Chip variant={statusVariant[selectedUser.status]} size="sm">
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
      </section >

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
          onRowClick={(user) => { setSelectedUser(user); setModalOpen(true) }}
        />
      </section>

      <DevTool control={control} />
    </div >
  )
}

export default App
