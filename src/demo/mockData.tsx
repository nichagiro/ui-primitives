import type { Column } from '../components/ui/DataTable'
import { Chip } from '../components/ui/Chip'
import { Button } from '../components/ui/Button'

export const paises = [
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

export type User = {
  id: number
  name: string
  email: string
  role: string
  status: string
  lastLogin: string
  department: string
  location: string
  bio: string
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
const departments = ['Ingeniería', 'Marketing', 'Ventas', 'RRHH', 'Finanzas', 'Soporte', 'Diseño'] as const
const locations = ['Buenos Aires', 'Santiago', 'CDMX', 'Madrid', 'Bogotá', 'Lima', 'São Paulo'] as const

const loremWords = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing',
  'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore',
  'et', 'dolore', 'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam',
  'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip',
  'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor',
  'in', 'reprehenderit', 'voluptate', 'velit', 'esse', 'cillum', 'dolore',
  'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat',
  'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia',
  'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum',
]

function generateLoremIpsum(min: number, max: number): string {
  const len = Math.floor(Math.random() * (max - min + 1)) + min
  const words: string[] = []
  for (let i = 0; i < len; i++) {
    words.push(loremWords[Math.floor(Math.random() * loremWords.length)])
  }
  return words.join(' ')
}

function generateUsers(count: number): User[] {
  const now = Date.now()
  const day = 86400000
  return Array.from({ length: count }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const role = roles[Math.floor(Math.random() * roles.length)]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const department = departments[Math.floor(Math.random() * departments.length)]
    const location = locations[Math.floor(Math.random() * locations.length)]
    const randomDay = new Date(now - Math.floor(Math.random() * 365) * day)
    const lastLogin = randomDay.toISOString().slice(0, 10)
    return {
      id: i + 1,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`,
      role,
      status,
      lastLogin,
      department,
      location,
      bio: generateLoremIpsum(20, 120),
    }
  })
}

export const users = generateUsers(300)

const statusVariant: Record<string, 'success' | 'error' | 'warning'> = {
  Activo: 'success',
  Inactivo: 'error',
  Pendiente: 'warning',
}

export const columns: Column<User>[] = [
  { header: 'Nombre', key: 'name', sortable: true, className: 'min-w-48' },
  { header: 'Email', key: 'email', sortable: true },
  { header: 'Rol', key: 'role', sortable: true },
  { header: 'Departamento', key: 'department', sortable: true },
  { header: 'Ubicación', key: 'location', sortable: true },
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
    header: 'Bio',
    key: 'bio',
    render: (row) => (
      <span title={row.bio} className="line-clamp-3 w-100 text-xs text-muted-foreground">{row.bio}</span>
    ),
    filterValue: (row) => row.bio,
  },
  {
    header: '',
    render: (user) => (
      <div className="flex justify-end gap-1">
        <Button
          type="button"
          size="sm"
          variant="ghost"
          colorScheme="info"
          onClick={(e) => { e.stopPropagation(); alert(`Editando a ${user.name}`) }}
        >
          Editar
        </Button>
        <Button
          type="button"
          size="sm"
          variant="solid"
          colorScheme="danger"
          onClick={(e) => { e.stopPropagation(); alert(`Eliminando a ${user.name}`) }}
        >
          Eliminar
        </Button>
      </div>
    ),
    className: 'text-right',
  },
]

export { statusVariant }
