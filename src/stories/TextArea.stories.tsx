import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextArea } from '../components/form/TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    resize: { control: 'select', options: ['none', 'vertical', 'both'] },
    required: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: { label: 'Comentarios', placeholder: 'Escribí algo...' },
}

export const WithError: Story = {
  args: { label: 'Descripción', error: 'Mínimo 10 caracteres', defaultValue: 'Corto' },
}

export const ResizeVertical: Story = {
  args: { label: 'Descripción larga', resize: 'vertical', placeholder: 'Este textarea solo se estira verticalmente' },
}

export const ResizeBoth: Story = {
  args: { label: 'Descripción', resize: 'both', placeholder: 'Se estira en ambas direcciones' },
}

export const Required: Story = {
  args: { label: 'Mensaje', required: true, placeholder: 'Tu mensaje...' },
}
