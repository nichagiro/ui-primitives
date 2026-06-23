import type { Meta, StoryObj } from '@storybook/react-vite'
import { Check } from '../components/form/Check'

const meta: Meta<typeof Check> = {
  title: 'Form/Check',
  component: Check,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    variant: { control: 'select', options: ['checkbox', 'switch'] },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Check>

export const Checkbox: Story = {
  args: { label: 'Acepto términos y condiciones' },
}

export const CheckboxRequired: Story = {
  args: { label: 'Acepto términos', required: true },
}

export const CheckboxWithError: Story = {
  args: { label: 'Acepto términos', error: 'Debes aceptar los términos' },
}

export const CheckboxDisabled: Story = {
  args: { label: 'Opción deshabilitada', disabled: true },
}

export const Switch: Story = {
  args: { label: 'Notificaciones', variant: 'switch' },
}

export const SwitchRequired: Story = {
  args: { label: 'Notificaciones', variant: 'switch', required: true },
}

export const SwitchWithError: Story = {
  args: { label: 'Notificaciones', variant: 'switch', error: 'Error en la opción' },
}

export const SwitchDisabled: Story = {
  args: { label: 'Opción deshabilitada', variant: 'switch', disabled: true },
}
