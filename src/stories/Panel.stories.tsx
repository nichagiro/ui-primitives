import type { Meta, StoryObj } from '@storybook/react-vite'
import { Panel } from '../components/ui/Panel'

const meta: Meta<typeof Panel> = {
  title: 'UI/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'primary', 'success', 'warning', 'danger'] },
    title: { control: 'text' },
    footer: { control: 'text' },
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

export const WithTitleAndFooter: Story = {
  args: { title: 'Título', children: 'Contenido del panel', footer: 'Footer del panel' },
}

export const Primary: Story = {
  args: { title: 'Primary', children: 'Contenido del panel', variant: 'primary' },
}

export const Success: Story = {
  args: { title: 'Success', children: 'Contenido del panel', variant: 'success' },
}

export const Warning: Story = {
  args: { title: 'Warning', children: 'Contenido del panel', variant: 'warning' },
}

export const Danger: Story = {
  args: { title: 'Danger', children: 'Contenido del panel', variant: 'danger' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Panel title="Default">Contenido</Panel>
      <Panel title="Primary" variant="primary">Contenido</Panel>
      <Panel title="Success" variant="success">Contenido</Panel>
      <Panel title="Warning" variant="warning">Contenido</Panel>
      <Panel title="Danger" variant="danger">Contenido</Panel>
    </div>
  ),
}
