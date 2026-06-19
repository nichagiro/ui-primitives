import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from '../components/ui/Alert'

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    title: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: { children: 'Esto es un mensaje informativo', variant: 'info', title: 'Información' },
}

export const Success: Story = {
  args: { children: 'Operación completada correctamente', variant: 'success', title: 'Éxito' },
}

export const Warning: Story = {
  args: { children: 'La sesión expirará pronto', variant: 'warning', title: 'Atención' },
}

export const Error: Story = {
  args: { children: 'Error al conectar con el servidor', variant: 'error', title: 'Error' },
}

export const Dismissible: Story = {
  args: { children: 'Hacé clic en la X para cerrar', variant: 'info', dismissible: true },
}

export const WithoutTitle: Story = {
  args: { children: 'Mensaje sin título', variant: 'success', dismissible: true },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Alert variant="info" title="Info">Mensaje informativo</Alert>
      <Alert variant="success" title="Success">Operación exitosa</Alert>
      <Alert variant="warning" title="Warning">Cuidado</Alert>
      <Alert variant="error" title="Error">Algo salió mal</Alert>
    </div>
  ),
}
