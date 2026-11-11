import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toaster, toast } from '../components/ui/Toast'
import { Button } from '../components/ui/Button'

const meta: Meta<typeof Toaster> = {
  title: 'UI/Toast',
  component: Toaster,
  tags: ['autodocs'],
  argTypes: {
    maxVisible: { control: 'number', description: 'Cantidad máxima de toasts visibles a la vez.' },
    autoClose: { control: 'boolean', description: 'Si es false, los toasts no se cierran automáticamente por defecto.' },
  },
  parameters: {
    docs: {
      description: {
        component: `
El sistema de toasts funciona con un patrón **provider global**: montás un único
\`<Toaster />\` en la raíz de tu app (suele ir en \`App.tsx\`, junto a tu routing o layout),
y después disparás notificaciones desde **cualquier componente** con la API imperativa
\`toast.*\` — sin necesidad de pasar props ni contexto.

\`<Toaster />\` se encarga de renderizar los toasts vía portal a \`document.body\`,
así que puede vivir en cualquier lugar del árbol; solo debe montarse **una vez**.

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

// Formato clásico con duración
toast.success('Usuario creado correctamente')           // 4s
toast.error('Error al conectar con el servidor')        // 5s
toast.info('Esto es un mensaje informativo', 3000)      // duración custom

// Toast persistente (sin auto-dismiss ni barra de progreso)
toast.warning('Hay cambios sin guardar', { persistent: true })

// Toast con botón de acción (automáticamente persistente)
toast.success('Elemento eliminado', {
  action: {
    label: 'Deshacer',
    onClick: () => handleUndo(),
  },
})

// Toast con acción principal y botón de cancelar/descartar (automáticamente persistente)
toast.error('Fallo en la conexión', {
  action: {
    label: 'Reintentar',
    onClick: () => handleRetry(),
  },
  cancel: {
    label: 'Cancelar', // onClick opcional, cierra el toast automáticamente
  },
})

// Toast con acción y timer explícito (opcional)
toast.info('Mensaje enviado', {
  duration: 5000,
  action: {
    label: 'Deshacer',
    onClick: () => handleUndo(),
  },
})
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

export const Persistent: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Toasts que no se quitan automáticamente (sin barra de progreso ni timer). Se cierran
manualmente con la cruz ('X') o mediante acciones.
        `,
      },
    },
  },
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button
          colorScheme="warning"
          onClick={() => toast.warning('Este aviso permanecerá visible hasta que lo cierres.', { persistent: true })}
        >
          Toast Persistente
        </Button>
        <Button
          colorScheme="danger"
          onClick={() => toast.error('Error crítico: requiere intervención manual.', { duration: 0 })}
        >
          Toast con duration: 0
        </Button>
      </div>
    </>
  ),
}

export const WithAction: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Toasts con botón de acción. Por defecto, hacer clic en la acción cierra automáticamente
el toast tras ejecutar la función (a menos que se indique \`autoDismiss: false\`).
        `,
      },
    },
  },
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button
          colorScheme="success"
          onClick={() =>
            toast.success('Archivo movido a la papelera', {
              action: {
                label: 'Deshacer',
                onClick: () => alert('Acción Deshacer ejecutada'),
              },
            })
          }
        >
          Con acción Deshacer
        </Button>
        <Button
          colorScheme="info"
          onClick={() =>
            toast.info('Nueva versión disponible en la plataforma', {
              action: {
                label: 'Actualizar',
                onClick: () => alert('Actualizando...'),
              },
            })
          }
        >
          Acción Auto-persistente
        </Button>
      </div>
    </>
  ),
}

export const WithActionAndCancel: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Toasts con acción primaria (action) y botón de cancelación (cancel sin onClick, cierra automáticamente el toast).
Automáticamente persistente por defecto.
        `,
      },
    },
  },
  render: () => (
    <>
      <Toaster />
      <Button
        colorScheme="danger"
        onClick={() =>
          toast.error('No se pudo sincronizar el proyecto con la nube', {
            action: {
              label: 'Reintentar',
              onClick: () => alert('Reintentando...'),
            },
            cancel: {
              label: 'Cancelar',
            },
          })
        }
      >
        Con Reintentar y Cancelar
      </Button>
    </>
  ),
}

export const ActionWithTimer: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Si querés que un toast con acción tenga tiempo límite (estilo temporizador de Gmail 'Deshacer envío'),
simplemente pasá \`duration\` en ms.
        `,
      },
    },
  },
  render: () => (
    <>
      <Toaster />
      <Button
        colorScheme="success"
        onClick={() =>
          toast.success('Mensaje enviado al destinatario', {
            duration: 5000,
            action: {
              label: 'Deshacer',
              onClick: () => alert('Envío deshecho'),
            },
          })
        }
      >
        Acción con Timer (5s)
      </Button>
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
