import type { Meta, StoryObj } from '@storybook/react-vite'
import { Panel } from '../components/ui/Panel'

const meta: Meta<typeof Panel> = {
  title: 'UI/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    colorScheme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] },
    title: { control: 'text' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Panel>

export const Default: Story = {
  args: { children: 'Contenido del panel' },
}

export const WithTitle: Story = {
  args: { title: 'Título', children: 'Contenido del panel' },
}

export const Primary: Story = {
  args: { title: 'Primary', children: 'Contenido del panel', colorScheme: 'primary' },
}

export const Success: Story = {
  args: { title: 'Success', children: 'Contenido del panel', colorScheme: 'success' },
}

export const Warning: Story = {
  args: { title: 'Warning', children: 'Contenido del panel', colorScheme: 'warning' },
}

export const Danger: Story = {
  args: { title: 'Danger', children: 'Contenido del panel', colorScheme: 'danger' },
}

export const Info: Story = {
  args: { title: 'Info', children: 'Contenido del panel', colorScheme: 'info' },
}

export const Secondary: Story = {
  args: { title: 'Secondary', children: 'Contenido del panel', colorScheme: 'secondary' },
}

export const AllColorSchemes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Panel title="Default">Contenido</Panel>
      <Panel title="Primary" colorScheme="primary">Contenido</Panel>
      <Panel title="Secondary" colorScheme="secondary">Contenido</Panel>
      <Panel title="Success" colorScheme="success">Contenido</Panel>
      <Panel title="Warning" colorScheme="warning">Contenido</Panel>
      <Panel title="Danger" colorScheme="danger">Contenido</Panel>
      <Panel title="Info" colorScheme="info">Contenido</Panel>
    </div>
  ),
}
