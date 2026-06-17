import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { Input } from './form/Input'
import { Select } from './form/Select'
import { TextArea } from './form/TextArea'
import { Check } from './form/Check'
import { Radio } from './form/Radio'
import { FileUpload } from './form/FileUpload'
import { Button } from './ui/Button'
import { Alert } from './ui/Alert'
import { Chip } from './ui/Chip'
import { Modal } from './ui/Modal'
import { DataTable, type Column } from './ui/DataTable'

const paises = [
  { value: "ar", label: 'Argentina' },
  { value: 'cl', label: 'Chile' },
  { value: 'mx', label: 'México' },
  { value: 'es', label: 'España' },
  { value: 'us', label: 'Estados Unidos' },
  { value: 'br', label: 'Brasil' },
  { value: 'co', label: 'Colombia' },
  { value: 'pe', label: 'Perú' },
  { value: 'uy', label: 'Uruguay' },
  { value: 'py', label: 'Paraguay' },
  { value: 'bo', label: 'Bolivia' },
  { value: 'ec', label: 'Ecuador' },
  { value: 've', label: 'Venezuela' },
  { value: 'cr', label: 'Costa Rica' },
  { value: 'pa', label: 'Panamá' },
  { value: 'gt', label: 'Guatemala' },
  { value: 'cu', label: 'Cuba' },
  { value: 'do', label: 'República Dominicana' },
]

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

type User = {
  id: number
  name: string
  email: string
  role: string
  status: string
  lastLogin: string
}

const firstNames = [
  'Juan', 'María', 'Carlos', 'Ana', 'Pedro', 'Laura', 'Diego', 'Sofía', 'José', 'Valentina',
  'Luis', 'Camila', 'Andrés', 'Isabella', 'Miguel', 'Gabriela', 'Javier', 'Lucía', 'Ricardo', 'Fernanda',
  'Santiago', 'Daniela', 'Felipe', 'Carolina', 'Pablo', 'Marcela', 'Alejandro', 'Natalia', 'Raúl', 'Verónica',
  'Hugo', 'Claudia', 'Iván', 'Lorena', 'Oscar', 'Adriana', 'Víctor', 'Patricia', 'Mario', 'Rosa',
]

const lastNames = [
  'Pérez', 'García', 'López', 'Martínez', 'Rodríguez', 'González', 'Hernández', 'Torres', 'Ramírez', 'Flores',
  'Sánchez', 'Cruz', 'Morales', 'Ortiz', 'Castillo', 'Reyes', 'Gutiérrez', 'Mendoza', 'Molina', 'Rivas',
  'Aguilar', 'Navarro', 'Delgado', 'Peña', 'Vargas', 'Rojas', 'Castro', 'Medina', 'Soto', 'Chávez',
  'Romero', 'Vega', 'Campos', 'Núñez', 'Guerrero', 'Jiménez', 'Salazar', 'Paredes', 'Cortés', 'León',
]

const roles = ['Admin', 'Editor', 'Viewer', 'Manager', 'Contributor'] as const
const statuses = ['Activo', 'Inactivo', 'Pendiente'] as const

function generateUsers(count: number): User[] {
  const now = Date.now()
  const day = 86400000
  return Array.from({ length: count }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const role = roles[Math.floor(Math.random() * roles.length)]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const randomDay = new Date(now - Math.floor(Math.random() * 365) * day)
    const lastLogin = randomDay.toISOString().slice(0, 10)
    return {
      id: i + 1,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`,
      role,
      status,
      lastLogin,
    }
  })
}

const users = generateUsers(300)

const columns: Column<User>[] = [
  { header: 'Nombre', key: 'name', sortable: true },
  { header: 'Email', key: 'email', sortable: true },
  { header: 'Rol', key: 'role', sortable: true },
  {
    header: 'Estado',
    key: 'status',
    render: (row) => (
      <Chip
        variant={
          row.status === 'Activo' ? 'success' :
            row.status === 'Inactivo' ? 'error' : 'warning'
        }
        size="sm"
      >
        {row.status}
      </Chip>
    ),
    sortable: true,
  },
  {
    header: 'Último acceso',
    key: 'lastLogin',
    render: (row) => {
      const [y, m, d] = row.lastLogin.split('-')
      return `${d}/${m}/${y}`
    },
    filterValue: (row) => {
      const [y, m, d] = row.lastLogin.split('-')
      return `${d}/${m}/${y}`
    },
    sortValue: (row) => row.lastLogin,
    sortable: true,
  },
  {
    header: '',
    render: (user) => (
      <div className="flex justify-end gap-1">
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={(e) => { e.stopPropagation(); alert(`Editando a ${user.name}`) }}
        >
          Editar
        </Button>
        <Button
          type="button"
          size="sm"
          variant="danger"
          onClick={(e) => { e.stopPropagation(); alert(`Eliminando a ${user.name}`) }}
        >
          Eliminar
        </Button>
      </div>
    ),
    className: 'text-right',
  },
]

const statusVariant: Record<string, 'success' | 'error' | 'warning'> = {
  Activo: 'success',
  Inactivo: 'error',
  Pendiente: 'warning',
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
  const [singleSelected, setSingleSelected] = useState<(string | number)[]>([5])
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
        <Button variant="outline" size="sm" onClick={() => setDark(!dark)}>
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

          <div className="space-y-2">
            <p className="text-xs font-medium text-primary">Género</p>
            <Radio label="Masculino" value="m" {...register('gender')} />
            <Radio label="Femenino" value="f" {...register('gender')} />
          </div>

          <Check label="Acepto términos y condiciones" {...register('terms')} />
          <Check label="Recibir notificaciones" variant="switch" {...register('notificaciones')} />

          <Button type="submit">Enviar</Button>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Button</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button loading={btnLoading} onClick={() => { setBtnLoading(true); setTimeout(() => setBtnLoading(false), 2000) }}>
            {btnLoading ? 'Cargando...' : 'Click me'}
          </Button>
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
          title={selectedUser?.name ?? 'Detalles del usuario'}
          size="lg"
          footer={
            <>
              <Button variant="ghost" onClick={() => { setModalOpen(false); setSelectedUser(null) }}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={() => { setModalOpen(false); setSelectedUser(null) }}>
                Guardar
              </Button>
            </>
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
        <DataTable
          columns={columns}
          data={users}
          keyExtractor={(u) => u.id}
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
          selection="single"
          selected={singleSelected}
          onSelectionChange={setSingleSelected}
          stickySelection
        />
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => setTableLoading(!tableLoading)}>
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
          scrollable
          stickySelection
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
