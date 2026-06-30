import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from '../components/ui/Modal'
import { Button } from '../components/ui/Button'
import { useState } from 'react'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
    persistent: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Open: Story = {
  args: {
    open: true,
    title: 'Modal abierto',
    children: <p className="text-muted-foreground">Este es el contenido del modal.</p>,
    onClose: () => {},
  },
}

export const Persistent: Story = {
  args: {
    open: true,
    title: 'Modal persistente',
    persistent: true,
    children: (
      <p className="text-muted-foreground">
        Solo se cierra con el botón X. Escape y clic fuera no funcionan.
      </p>
    ),
    onClose: () => {},
  },
}

export const WithFooter: Story = {
  args: {
    open: true,
    title: 'Confirmar acción',
    children: <p className="text-muted-foreground">¿Estás seguro de querer continuar?</p>,
    footer: (
      <div className="flex justify-end gap-2">
        <Button variant="ghost">Cancelar</Button>
        <Button colorScheme="danger">Eliminar</Button>
      </div>
    ),
    onClose: () => {},
  },
}

export const Small: Story = {
  args: {
    open: true,
    title: 'Modal pequeño',
    size: 'sm',
    children: <p className="text-muted-foreground">Contenido compacto.</p>,
    onClose: () => {},
  },
}

export const Large: Story = {
  args: {
    open: true,
    title: 'Modal grande',
    size: 'lg',
    children: (
      <div className="space-y-4 text-muted-foreground">
        <p>Este modal ocupa más espacio horizontal.</p>
        <p>Ideal para formularios extensos o tablas.</p>
      </div>
    ),
    onClose: () => {},
  },
}

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Modal interactivo">
          <p className="text-muted-foreground">Hacé clic fuera o presioná Escape para cerrar.</p>
        </Modal>
      </>
    )
  },
}

export const InteractivePersistent: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir modal persistente</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Modal persistente" persistent>
          <p className="text-muted-foreground">
            Solo podés cerrarlo con el botón X.
          </p>
        </Modal>
      </>
    )
  },
}
