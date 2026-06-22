import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Panel } from '../components/ui/Panel'

describe('Panel', () => {
  it('renders children', () => {
    render(<Panel>Content</Panel>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders title', () => {
    render(<Panel title="My Title">Content</Panel>)
    expect(screen.getByText('My Title')).toBeInTheDocument()
  })

  it('renders footer', () => {
    render(<Panel footer="Footer text">Content</Panel>)
    expect(screen.getByText('Footer text')).toBeInTheDocument()
  })

  it('applies default variant border', () => {
    render(<Panel>Content</Panel>)
    const el = screen.getByText('Content').parentElement!
    expect(el.className).toContain('border-border')
  })

  it('applies primary variant border and header color', () => {
    render(<Panel variant="primary" title="Title">Content</Panel>)
    const titleEl = screen.getByText('Title')
    expect(titleEl.className).toContain('text-primary')
    const panelEl = titleEl.parentElement!
    expect(panelEl.className).toContain('border-primary')
  })

  it('applies danger variant', () => {
    render(<Panel variant="danger" title="Title">Content</Panel>)
    expect(screen.getByText('Title').className).toContain('text-danger')
  })

  it('merges custom className', () => {
    render(<Panel className="extra-class">Content</Panel>)
    const el = screen.getByText('Content').parentElement!
    expect(el.className).toContain('extra-class')
  })
})
