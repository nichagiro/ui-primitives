import type { Meta, StoryObj } from '@storybook/react-vite'
import { Loading } from '../components/ui/Loading'

const meta: Meta<typeof Loading> = {
  title: 'UI/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['spinner', 'dots', 'bars'] },
    colorScheme: { control: 'select', options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof Loading>

export const Spinner: Story = {
  args: { variant: 'spinner' },
}

export const Dots: Story = {
  args: { variant: 'dots' },
}

export const Bars: Story = {
  args: { variant: 'bars' },
}

export const Small: Story = {
  args: { size: 'sm' },
}

export const Large: Story = {
  args: { size: 'lg' },
}

export const Danger: Story = {
  args: { colorScheme: 'danger' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center gap-6">
        <Loading variant="spinner" colorScheme="primary" />
        <Loading variant="spinner" colorScheme="secondary" />
        <Loading variant="spinner" colorScheme="danger" />
        <Loading variant="spinner" colorScheme="success" />
        <Loading variant="spinner" colorScheme="warning" />
        <Loading variant="spinner" colorScheme="info" />
      </div>
      <div className="flex items-center gap-6">
        <Loading variant="dots" colorScheme="primary" />
        <Loading variant="dots" colorScheme="secondary" />
        <Loading variant="dots" colorScheme="danger" />
        <Loading variant="dots" colorScheme="success" />
        <Loading variant="dots" colorScheme="warning" />
        <Loading variant="dots" colorScheme="info" />
      </div>
      <div className="flex items-center gap-6">
        <Loading variant="bars" colorScheme="primary" />
        <Loading variant="bars" colorScheme="secondary" />
        <Loading variant="bars" colorScheme="danger" />
        <Loading variant="bars" colorScheme="success" />
        <Loading variant="bars" colorScheme="warning" />
        <Loading variant="bars" colorScheme="info" />
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-6">
        <Loading variant="spinner" size="sm" />
        <Loading variant="spinner" size="md" />
        <Loading variant="spinner" size="lg" />
      </div>
      <div className="flex items-center gap-6">
        <Loading variant="dots" size="sm" />
        <Loading variant="dots" size="md" />
        <Loading variant="dots" size="lg" />
      </div>
      <div className="flex items-center gap-6">
        <Loading variant="bars" size="sm" />
        <Loading variant="bars" size="md" />
        <Loading variant="bars" size="lg" />
      </div>
    </div>
  ),
}

export const FullPageLoading: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center">
      <Loading variant="spinner" size="lg" />
    </div>
  ),
}
