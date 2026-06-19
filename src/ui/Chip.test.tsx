import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Chip } from './Chip'

describe('Chip', () => {
  it('renders children', () => {
    render(<Chip>React</Chip>)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('renders default variant', () => {
    render(<Chip>Default</Chip>)
    expect(screen.getByText('Default').className).toContain('bg-muted')
  })

  it('renders primary variant', () => {
    render(<Chip variant="primary">Primary</Chip>)
    expect(screen.getByText('Primary').className).toContain('bg-primary/10')
  })

  it('renders sm size', () => {
    render(<Chip size="sm">Small</Chip>)
    expect(screen.getByText('Small').className).toContain('text-xs')
  })

  it('calls onDismiss when close clicked', async () => {
    const onDismiss = vi.fn()
    render(<Chip onDismiss={onDismiss}>Chip</Chip>)
    await userEvent.click(screen.getByRole('button'))
    expect(onDismiss).toHaveBeenCalledOnce()
  })

  it('does not show dismiss button when onDismiss not provided', () => {
    render(<Chip>No dismiss</Chip>)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
