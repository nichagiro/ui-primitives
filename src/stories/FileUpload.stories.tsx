import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileUpload } from '../components/form/FileUpload'

const meta: Meta<typeof FileUpload> = {
  title: 'Form/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
  args: { label: 'Adjuntar archivo' },
}

export const Multiple: Story = {
  args: { label: 'Adjuntar archivos', multiple: true },
}

export const WithAccept: Story = {
  args: { label: 'Solo PDF', accept: '.pdf', multiple: true },
}

export const WithError: Story = {
  args: { label: 'Archivo', error: 'El archivo es requerido' },
}

export const Required: Story = {
  args: { label: 'CV', required: true, accept: '.pdf,.doc,.docx' },
}
