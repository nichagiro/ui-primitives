import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '../components/form/Input'

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: { control: 'select', options: ['text', 'email', 'password', 'date', 'time', 'number'] },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { label: 'Nombre', placeholder: 'Tu nombre' },
}

export const WithError: Story = {
  args: { label: 'Email', type: 'email', error: 'Email inválido', defaultValue: 'mal@' },
}

export const Required: Story = {
  args: { label: 'Teléfono', required: true, placeholder: '+54 11 1234-5678' },
}

export const Disabled: Story = {
  args: { label: 'Usuario', disabled: true, defaultValue: 'juanperez' },
}

export const DateInput: Story = {
  args: { label: 'Fecha de nacimiento', type: 'date' },
}

export const Password: Story = {
  args: { label: 'Contraseña', type: 'password', placeholder: '********' },
}
