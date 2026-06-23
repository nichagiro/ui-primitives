import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Check } from '../components/form/Check'

describe('Check', () => {
  it('renders checkbox variant with label', () => {
    render(<Check label="Acepto términos" />)
    expect(screen.getByText('Acepto términos')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('shows required indicator', () => {
    render(<Check label="Términos" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('sets required attribute on checkbox', () => {
    render(<Check label="Términos" required />)
    expect(screen.getByRole('checkbox')).toBeRequired()
  })

  it('sets required attribute on switch', () => {
    render(<Check label="Notificaciones" variant="switch" required />)
    expect(screen.getByRole('checkbox')).toBeRequired()
  })

  it('renders switch variant with label', () => {
    render(<Check label="Notificaciones" variant="switch" />)
    expect(screen.getByText('Notificaciones')).toBeInTheDocument()
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.className).toContain('sr-only')
  })

  it('shows error message', () => {
    render(<Check label="Términos" error="Debes aceptar" />)
    expect(screen.getByRole('alert')).toHaveTextContent('Debes aceptar')
  })

  it('shows error on switch variant', () => {
    render(<Check label="Notificaciones" variant="switch" error="Error" />)
    expect(screen.getByRole('alert')).toHaveTextContent('Error')
  })

  it('forwards ref on checkbox', () => {
    const ref = { current: null }
    render(<Check label="Términos" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
