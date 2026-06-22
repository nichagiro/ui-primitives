import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Panel } from '../components/ui/Panel'

function getContainer() {
  return screen.getByText('Content').parentElement!.parentElement!.parentElement!
}

describe('Panel', () => {
  it('renders children', () => {
    render(<Panel>Content</Panel>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders title', () => {
    render(<Panel title="My Title">Content</Panel>)
    expect(screen.getByText('My Title')).toBeInTheDocument()
  })

  it('always uses border-border', () => {
    render(<Panel>Content</Panel>)
    expect(getContainer().className).toContain('border-border')
  })

  it('applies primary colorScheme header background and text', () => {
    render(<Panel colorScheme="primary" title="Title">Content</Panel>)
    const header = screen.getByText('Title')
    expect(header.className).toContain('bg-primary/10')
    expect(header.className).toContain('text-primary')
  })

  it('applies danger colorScheme header', () => {
    render(<Panel colorScheme="danger" title="Title">Content</Panel>)
    const header = screen.getByText('Title')
    expect(header.className).toContain('bg-danger/10')
    expect(header.className).toContain('text-danger')
  })

  it('merges custom className', () => {
    render(<Panel className="extra-class">Content</Panel>)
    expect(getContainer().className).toContain('extra-class')
  })

  it('shows children by default', () => {
    render(<Panel title="Title">Content</Panel>)
    expect(screen.getByText('Content')).toBeVisible()
  })

  it('hides children when header is clicked', async () => {
    const user = userEvent.setup()
    render(<Panel title="Title">Content</Panel>)
    await user.click(screen.getByText('Title'))
    const overflowDiv = screen.getByText('Content').parentElement!
    expect(overflowDiv.className).toContain('overflow-hidden')
  })

  it('rotates chevron on collapse', async () => {
    const user = userEvent.setup()
    render(<Panel title="Title">Content</Panel>)
    const button = screen.getByText('Title')
    const chevron = button.querySelector('svg')!
    expect(chevron.getAttribute('class')).not.toContain('-rotate-90')
    await user.click(button)
    expect(chevron.getAttribute('class')).toContain('-rotate-90')
  })
})
