import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Pagination } from './Pagination'

const defaultProps = {
  page: 1,
  totalPages: 5,
  totalItems: 50,
  startRecord: 1,
  endRecord: 10,
  onPageChange: vi.fn(),
  colorScheme: 'primary' as const,
}

describe('Pagination', () => {
  it('renders record info', () => {
    render(<Pagination {...defaultProps} />)
    expect(screen.getByText(/Mostrando 1-10 de 50/)).toBeInTheDocument()
  })

  it('renders page buttons', () => {
    render(<Pagination {...defaultProps} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('does not render when totalPages is 1', () => {
    render(<Pagination {...defaultProps} totalPages={1} />)
    expect(screen.queryByText(/Mostrando/)).not.toBeInTheDocument()
  })

  it('calls onPageChange when clicking page number', async () => {
    const onPageChange = vi.fn()
    render(<Pagination {...defaultProps} onPageChange={onPageChange} />)
    await userEvent.click(screen.getByText('3'))
    expect(onPageChange).toHaveBeenCalledWith(3)
  })

  it('previous button is disabled on first page', () => {
    render(<Pagination {...defaultProps} page={1} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons[0]).toBeDisabled()
  })

  it('next button is disabled on last page', () => {
    render(<Pagination {...defaultProps} page={5} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons[buttons.length - 1]).toBeDisabled()
  })

  it('calls onPageChange with next page', async () => {
    const onPageChange = vi.fn()
    render(<Pagination {...defaultProps} page={2} onPageChange={onPageChange} />)
    const buttons = screen.getAllByRole('button')
    const nextBtn = buttons[buttons.length - 1]
    await userEvent.click(nextBtn)
    expect(onPageChange).toHaveBeenCalledWith(3)
  })

  it('calls onPageChange with previous page', async () => {
    const onPageChange = vi.fn()
    render(<Pagination {...defaultProps} page={3} onPageChange={onPageChange} />)
    const buttons = screen.getAllByRole('button')
    const prevBtn = buttons[0]
    await userEvent.click(prevBtn)
    expect(onPageChange).toHaveBeenCalledWith(2)
  })
})
