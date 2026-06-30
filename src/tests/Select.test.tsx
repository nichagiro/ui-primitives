import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Select } from '../components/form/Select'

const paises = [
  { value: 'ar', label: 'Argentina' },
  { value: 'br', label: 'Brasil' },
  { value: 'cl', label: 'Chile' },
]

function TestSelect(props: Record<string, unknown>) {
  return (
    <Select label="País" placeholder="Seleccioná..." {...props}>
      {paises.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
    </Select>
  )
}

describe('Select', () => {
  it('renders label', () => {
    render(<TestSelect />)
    expect(screen.getByText('País')).toBeInTheDocument()
  })

  it('renders placeholder', () => {
    render(<TestSelect />)
    expect(screen.getByText('Seleccioná...')).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(<TestSelect error="Campo requerido" />)
    expect(screen.getByRole('alert')).toHaveTextContent('Campo requerido')
  })

  it('opens dropdown on click', async () => {
    const user = userEvent.setup()
    render(<TestSelect />)
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByText('Argentina')).toBeInTheDocument()
  })

  it('closes dropdown on click outside', async () => {
    const user = userEvent.setup()
    render(<TestSelect />)
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(document.body)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('selects an option on click', async () => {
    const user = userEvent.setup()
    render(<TestSelect />)
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Chile'))
    expect(screen.getByText('Chile')).toBeInTheDocument()
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('respects disabled prop', async () => {
    const user = userEvent.setup()
    render(<TestSelect disabled />)
    expect(screen.getByRole('combobox')).toBeDisabled()
    await user.click(screen.getByRole('combobox'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })
})
