import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from '../components/ui/Chip'

const meta: Meta<typeof Chip> = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'primary', 'success', 'warning', 'error'] },
    size: { control: 'select', options: ['sm', 'md'] },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: { children: 'Default' },
}

export const Primary: Story = {
  args: { children: 'Primary', variant: 'primary' },
}

export const Success: Story = {
  args: { children: 'Success', variant: 'success' },
}

export const Warning: Story = {
  args: { children: 'Warning', variant: 'warning' },
}

export const Error: Story = {
  args: { children: 'Error', variant: 'error' },
}

export const Small: Story = {
  args: { children: 'Small', size: 'sm' },
}

export const Dismissible: Story = {
  args: { children: 'Clickeame', variant: 'primary' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Chip>Default</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="error">Error</Chip>
    </div>
  ),
}
