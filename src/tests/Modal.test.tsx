import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Modal } from '../components/ui/Modal'

describe('Modal', () => {
  it('renders nothing when closed', () => {
    render(
      <Modal open={false} onClose={vi.fn()}>
        Content
      </Modal>,
    )
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('renders content when open', () => {
    render(
      <Modal open={true} onClose={vi.fn()}>
        Content
      </Modal>,
    )
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders title', () => {
    render(
      <Modal open={true} onClose={vi.fn()} title="My Title">
        Content
      </Modal>,
    )
    expect(screen.getByText('My Title')).toBeInTheDocument()
  })

  it('renders footer', () => {
    render(
      <Modal open={true} onClose={vi.fn()} footer={<button>Save</button>}>
        Content
      </Modal>,
    )
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
  })

  it('calls onClose on backdrop click', () => {
    const onClose = vi.fn()
    render(
      <Modal open={true} onClose={onClose}>
        Content
      </Modal>,
    )
    screen.getByRole('dialog').click()
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('does not call onClose on content click', () => {
    const onClose = vi.fn()
    render(
      <Modal open={true} onClose={onClose}>
        <span>Content</span>
      </Modal>,
    )
    screen.getByText('Content').click()
    expect(onClose).not.toHaveBeenCalled()
  })

  it('calls onClose on ESC when not persistent', () => {
    const onClose = vi.fn()
    render(
      <Modal open={true} onClose={onClose}>
        Content
      </Modal>,
    )
    const dialog = screen.getByRole('dialog')
    dialog.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('does not call onClose on ESC when persistent', () => {
    const onClose = vi.fn()
    render(
      <Modal open={true} onClose={onClose} persistent>
        Content
      </Modal>,
    )
    const dialog = screen.getByRole('dialog')
    dialog.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not call onClose on backdrop click when persistent', () => {
    const onClose = vi.fn()
    render(
      <Modal open={true} onClose={onClose} persistent>
        Content
      </Modal>,
    )
    screen.getByRole('dialog').click()
    expect(onClose).not.toHaveBeenCalled()
  })
})
