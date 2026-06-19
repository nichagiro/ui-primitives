import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toaster, toast } from '../components/ui/Toast'
import { Button } from '../components/ui/Button'

const meta: Meta<typeof Toaster> = {
  title: 'UI/Toast',
  component: Toaster,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toaster>

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
