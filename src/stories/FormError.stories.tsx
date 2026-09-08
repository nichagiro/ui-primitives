import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormError } from '../components/form/FormError'

const meta: Meta<typeof FormError> = {
  title: 'Form/FormError',
  component: FormError,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    className: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof FormError>

export const WithMessage: Story = {
  args: { message: 'Campo requerido' },
}

export const Empty: Story = {
  args: {},
}
