import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioGroup } from '../components/form/RadioGroup'

const options = [
  { label: 'Masculino', value: 'm' },
  { label: 'Femenino', value: 'f' },
  { label: 'Prefiero no decirlo', value: 'ns/nc' },
]

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    required: { control: 'boolean' },
    orientation: { control: 'select', options: ['vertical', 'horizontal'] },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Vertical: Story = {
  args: { label: 'Género', options, orientation: 'vertical' },
}

export const VerticalRequired: Story = {
  args: { label: 'Género', options, orientation: 'vertical', required: true },
}

export const Horizontal: Story = {
  args: { label: 'Género', options, orientation: 'horizontal' },
}

export const WithError: Story = {
  args: { label: 'Género', options, error: 'Seleccioná un género' },
}

export const WithDisabledOption: Story = {
  args: {
    label: 'Género',
    options: [
      { label: 'Masculino', value: 'm' },
      { label: 'Femenino', value: 'f', disabled: true },
    ],
  },
}
