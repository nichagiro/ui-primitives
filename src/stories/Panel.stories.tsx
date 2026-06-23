import type { Meta, StoryObj } from '@storybook/react-vite'
import { Panel } from '../components/ui/Panel'

const meta: Meta<typeof Panel> = {
  title: 'UI/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    colorScheme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] },
    variant: { control: 'select', options: ['solid', 'soft'] },
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

export const PrimarySoft: Story = {
  args: { title: 'Primary Soft', children: 'Contenido del panel', colorScheme: 'primary', variant: 'soft' },
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
      <Panel title="Primary Solid" colorScheme="primary">Contenido</Panel>
      <Panel title="Primary Soft" colorScheme="primary" variant="soft">Contenido</Panel>
      <Panel title="Secondary Solid" colorScheme="secondary">Contenido</Panel>
      <Panel title="Secondary Soft" colorScheme="secondary" variant="soft">Contenido</Panel>
      <Panel title="Success Solid" colorScheme="success">Contenido</Panel>
      <Panel title="Success Soft" colorScheme="success" variant="soft">Contenido</Panel>
      <Panel title="Warning Solid" colorScheme="warning">Contenido</Panel>
      <Panel title="Warning Soft" colorScheme="warning" variant="soft">Contenido</Panel>
      <Panel title="Danger Solid" colorScheme="danger">Contenido</Panel>
      <Panel title="Danger Soft" colorScheme="danger" variant="soft">Contenido</Panel>
      <Panel title="Info Solid" colorScheme="info">Contenido</Panel>
      <Panel title="Info Soft" colorScheme="info" variant="soft">Contenido</Panel>
    </div>
  ),
}
