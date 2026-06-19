import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/ui/Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'soft', 'ghost'] },
    colorScheme: { control: 'select', options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Primary', colorScheme: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Secondary', colorScheme: 'secondary' },
}

export const Danger: Story = {
  args: { children: 'Destructive', colorScheme: 'danger' },
}

export const Success: Story = {
  args: { children: 'Success', colorScheme: 'success' },
}

export const Soft: Story = {
  args: { children: 'Soft', variant: 'soft', colorScheme: 'primary' },
}

export const Ghost: Story = {
  args: { children: 'Ghost', variant: 'ghost', colorScheme: 'primary' },
}

export const Loading: Story = {
  args: { children: 'Guardando...', loading: true },
}

export const Disabled: Story = {
  args: { children: 'Deshabilitado', disabled: true },
}

export const Small: Story = {
  args: { children: 'Small', size: 'sm' },
}

export const Large: Story = {
  args: { children: 'Large', size: 'lg' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button colorScheme="primary">Primary</Button>
      <Button colorScheme="secondary">Secondary</Button>
      <Button colorScheme="danger">Danger</Button>
      <Button variant="soft" colorScheme="primary">Soft</Button>
      <Button variant="ghost" colorScheme="primary">Ghost</Button>
    </div>
  ),
}
