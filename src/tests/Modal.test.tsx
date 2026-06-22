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

  it('calls onClose when dialog close event fires', async () => {
    const onClose = vi.fn()
    render(
      <Modal open={true} onClose={onClose}>
        Content
      </Modal>,
    )
    const dialog = screen.getByRole('dialog')
    dialog.dispatchEvent(new Event('close'))
    expect(onClose).toHaveBeenCalledOnce()
  })
})
