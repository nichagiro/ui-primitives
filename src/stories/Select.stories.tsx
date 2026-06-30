import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from '../components/form/Select'
import { Panel } from '../components/ui/Panel'

const paises = [
  { value: 'ar', label: 'Argentina' },
  { value: 'br', label: 'Brasil' },
  { value: 'cl', label: 'Chile' },
  { value: 'co', label: 'Colombia' },
  { value: 'mx', label: 'México' },
]

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    searchable: { control: 'boolean' },
    multiple: { control: 'boolean' },
  },
  render: (args) => (
    <Select {...args}>
      {paises.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
    </Select>
  ),
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: { label: 'País', placeholder: 'Seleccioná un país' },
}

export const WithError: Story = {
  args: { label: 'País', error: 'Seleccioná un país', placeholder: 'Seleccioná...' },
}

export const Searchable: Story = {
  args: { label: 'País', searchable: true, placeholder: 'Buscá un país...' },
}

export const Multiple: Story = {
  args: { label: 'Países', multiple: true, placeholder: 'Elegí países...' },
}

export const SearchableMultiple: Story = {
  args: { label: 'Países', multiple: true, searchable: true, placeholder: 'Buscá países...' },
}

export const InsidePanel: Story = {
  render: () => (
    <div className="max-w-sm">
      <Panel title="Panel con Select">
        <Select label="País" placeholder="Seleccioná un país...">
          {paises.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
        </Select>
      </Panel>
    </div>
  ),
}
