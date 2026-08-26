import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from '../components/ui/Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['underline', 'pill', 'cards'] },
    colorScheme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] },
    defaultValue: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

const sampleTabs = [
  { value: 'tab1', label: 'Tab 1', content: 'Contenido del primer tab' },
  { value: 'tab2', label: 'Tab 2', content: 'Contenido del segundo tab' },
  { value: 'tab3', label: 'Tab 3', content: 'Contenido del tercer tab' },
]

export const Default: Story = {
  args: { defaultValue: 'tab1', tabs: sampleTabs },
}

export const Pill: Story = {
  args: { defaultValue: 'tab1', variant: 'pill', tabs: sampleTabs },
}

export const Cards: Story = {
  args: { defaultValue: 'tab1', variant: 'cards', tabs: sampleTabs },
}

export const PillSuccess: Story = {
  args: { defaultValue: 'tab1', variant: 'pill', colorScheme: 'success', tabs: sampleTabs },
}

export const CardsDanger: Story = {
  args: { defaultValue: 'tab1', variant: 'cards', colorScheme: 'danger', tabs: sampleTabs },
}

export const WithDisabledTab: Story = {
  args: {
    defaultValue: 'tab1',
    tabs: [
      { value: 'tab1', label: 'Activo', content: 'Contenido activo' },
      { value: 'tab2', label: 'Deshabilitado', content: 'No debería verse', disabled: true },
      { value: 'tab3', label: 'Otro', content: 'Otro contenido' },
    ],
  },
}

export const WithRichContent: Story = {
  args: {
    defaultValue: 'overview',
    tabs: [
      { value: 'overview', label: 'Resumen', content: (
        <div>
          <h3 className="text-base font-semibold mb-2">Resumen general</h3>
          <p>Este es un tab con contenido más complejo que incluye elementos HTML.</p>
        </div>
      )},
      { value: 'details', label: 'Detalles', content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Elemento uno</li>
          <li>Elemento dos</li>
          <li>Elemento tres</li>
        </ul>
      )},
      { value: 'settings', label: 'Configuración', content: 'Configuración del componente.' },
    ],
  },
}

export const Controlled: Story = {
  render: () => {
    const [active, setActive] = useState('tab1')
    return (
      <div className="space-y-3">
        <Tabs value={active} onChange={setActive} tabs={sampleTabs} />
        <p className="text-xs text-muted-foreground">Tab activo: {active}</p>
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      {(['underline', 'pill', 'cards'] as const).map(v => (
        <div key={v}>
          <p className="text-xs font-medium text-muted-foreground mb-2 capitalize">{v}</p>
          <Tabs variant={v} defaultValue="tab1" tabs={sampleTabs} />
        </div>
      ))}
    </div>
  ),
}

export const AllColorSchemes: Story = {
  render: () => (
    <div className="space-y-6">
      {(['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const).map(scheme => (
        <div key={scheme}>
          <p className="text-xs font-medium text-muted-foreground mb-2 capitalize">{scheme}</p>
          <Tabs defaultValue="tab1" colorScheme={scheme} tabs={sampleTabs} />
        </div>
      ))}
    </div>
  ),
}
