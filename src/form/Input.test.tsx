import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('renders label', () => {
    render(<Input label="Nombre" />)
    expect(screen.getByText('Nombre')).toBeInTheDocument()
  })

  it('renders input element', () => {
    render(<Input label="Nombre" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(<Input label="Nombre" error="Campo requerido" />)
    expect(screen.getByRole('alert')).toHaveTextContent('Campo requerido')
  })

  it('shows required indicator', () => {
    render(<Input label="Nombre" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('applies placeholder', () => {
    render(<Input label="Nombre" placeholder="Tu nombre" />)
    expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Input label="Nombre" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
