import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Alert } from './Alert'

describe('Alert', () => {
  it('renders children', () => {
    render(<Alert>Mensaje</Alert>)
    expect(screen.getByText('Mensaje')).toBeInTheDocument()
  })

  it('renders title', () => {
    render(<Alert title="Info">Contenido</Alert>)
    expect(screen.getByText('Info')).toBeInTheDocument()
  })

  it('renders info variant by default', () => {
    render(<Alert>Info</Alert>)
    expect(screen.getByRole('alert').className).toContain('border-info')
  })

  it('renders success variant', () => {
    render(<Alert variant="success">Success</Alert>)
    expect(screen.getByRole('alert').className).toContain('border-success')
  })

  it('renders warning variant', () => {
    render(<Alert variant="warning">Warning</Alert>)
    expect(screen.getByRole('alert').className).toContain('border-warning')
  })

  it('renders error variant', () => {
    render(<Alert variant="error">Error</Alert>)
    expect(screen.getByRole('alert').className).toContain('border-danger')
  })

  it('dismisses when close button clicked', async () => {
    render(<Alert dismissible>Dismiss me</Alert>)
    const closeBtn = screen.getByRole('button', { name: 'Cerrar' })
    await userEvent.click(closeBtn)
    expect(screen.queryByText('Dismiss me')).not.toBeInTheDocument()
  })

  it('does not show close button when not dismissible', () => {
    render(<Alert>No dismiss</Alert>)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
