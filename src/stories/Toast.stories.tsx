import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toaster, toast } from '../components/ui/Toast'
import { Button } from '../components/ui/Button'

const meta: Meta<typeof Toaster> = {
  title: 'UI/Toast',
  component: Toaster,
  tags: ['autodocs'],
  argTypes: {
    maxVisible: { control: 'number', description: 'Cantidad máxima de toasts visibles a la vez.' },
  },
  parameters: {
    docs: {
      description: {
        component: `
El sistema de toasts funciona con un patrón **provider global**: montás un único
\`<Toaster />\` en la raíz de tu app (suele ir en \`App.tsx\`, junto a tel routing o layout),
y después disparás notificaciones desde **cualquier componente** con la API imperativa
\`toast.*\` — sin necesidad de pasar props ni contexto.

\`<Toaster />\` se encarga de renderizar los toasts vía portal a \`document.body\`,
así que puede vivir en cualquier lugar del arbol; solo debe montarse **una vez**.

\`\`\`tsx
// App.tsx — montá Toaster UNA sola vez
import { Toaster } from '@nichagiro/ui-primitives'

function App() {
  return (
    <>
      <YourRoutes />
      <Toaster maxVisible={5} />
    </>
  )
}
\`\`\`

\`\`\`tsx
// Cualquier componente o util — dispará un toast
import { toast } from '@nichagiro/ui-primitives'

toast.success('Usuario creado correctamente')           // 4s
toast.error('Error al conectar con el servidor')        // 5s
toast.info('Esto es un mensaje informativo', 3000)      // duración custom
toast.warning('La sesión expirará pronto')
toast.dismiss(id)                                       // cerrar programáticamente
\`\`\`
      `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Usage: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Presioná los botones para probar cada variante en vivo. En producción montás
un \`<Toaster />\` en la raíz y llamás a \`toast.*\` desde donde necesites.
        `,
      },
    },
  },
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button colorScheme="info" onClick={() => toast.info('Esto es un mensaje informativo')}>
          Mostrar Info
        </Button>
        <Button colorScheme="success" onClick={() => toast.success('Usuario creado correctamente')}>
          Mostrar Success
        </Button>
        <Button colorScheme="warning" onClick={() => toast.warning('La sesión expirará pronto')}>
          Mostrar Warning
        </Button>
        <Button colorScheme="danger" onClick={() => toast.error('Error al conectar con el servidor')}>
          Mostrar Error
        </Button>
      </div>
    </>
  ),
}

export const Info: Story = {
  render: () => (
    <>
      <Toaster />
      <Button colorScheme="info" onClick={() => toast.info('Esto es un mensaje informativo')}>
        Mostrar Info
      </Button>
    </>
  ),
}

export const Success: Story = {
  render: () => (
    <>
      <Toaster />
      <Button colorScheme="success" onClick={() => toast.success('Usuario creado correctamente')}>
        Mostrar Success
      </Button>
    </>
  ),
}

export const Warning: Story = {
  render: () => (
    <>
      <Toaster />
      <Button colorScheme="warning" onClick={() => toast.warning('La sesión expirará pronto')}>
        Mostrar Warning
      </Button>
    </>
  ),
}

export const Error: Story = {
  render: () => (
    <>
      <Toaster />
      <Button colorScheme="danger" onClick={() => toast.error('Error al conectar con el servidor')}>
        Mostrar Error
      </Button>
    </>
  ),
}

export const AllToasts: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button colorScheme="info" onClick={() => toast.info('Info')}>Info</Button>
        <Button colorScheme="success" onClick={() => toast.success('Success')}>Success</Button>
        <Button colorScheme="warning" onClick={() => toast.warning('Warning')}>Warning</Button>
        <Button colorScheme="danger" onClick={() => toast.error('Error')}>Error</Button>
      </div>
    </>
  ),
}