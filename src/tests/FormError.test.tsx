import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FormError } from '../components/form/FormError'

describe('FormError', () => {
  it('renders nothing when message is empty', () => {
    const { container } = render(<FormError />)
    expect(container.firstChild).toBeNull()
  })

  it('renders message with role alert', () => {
    render(<FormError message="Requerido" />)
    expect(screen.getByRole('alert')).toHaveTextContent('Requerido')
  })

  it('applies custom className', () => {
    render(<FormError message="Error" className="ps-0" />)
    expect(screen.getByRole('alert')).toHaveClass('ps-0')
  })
})
