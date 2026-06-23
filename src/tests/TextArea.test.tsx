import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TextArea } from '../components/form/TextArea'

describe('TextArea', () => {
  it('renders label', () => {
    render(<TextArea label="Comentarios" />)
    expect(screen.getByText('Comentarios')).toBeInTheDocument()
  })

  it('renders textarea element', () => {
    render(<TextArea label="Comentarios" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(<TextArea label="Comentarios" error="Muy corto" />)
    expect(screen.getByRole('alert')).toHaveTextContent('Muy corto')
  })

  it('shows required indicator', () => {
    render(<TextArea label="Comentarios" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('sets required attribute on native textarea', () => {
    render(<TextArea label="Comentarios" required />)
    expect(screen.getByRole('textbox')).toBeRequired()
  })

  it('default resize is none', () => {
    render(<TextArea label="Comentarios" />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.className).toContain('resize-none')
  })

  it('applies resize vertical', () => {
    render(<TextArea label="Comentarios" resize="vertical" />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.className).toContain('resize-y')
  })

  it('applies resize both', () => {
    render(<TextArea label="Comentarios" resize="both" />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.className).toContain('resize')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<TextArea label="Comentarios" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })
})
