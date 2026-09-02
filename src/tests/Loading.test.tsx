import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Loading } from '../components/ui/Loading'

describe('Loading', () => {
  it('renders with role status and aria-label', () => {
    render(<Loading />)
    const el = screen.getByRole('status', { name: 'Loading' })
    expect(el).toBeInTheDocument()
  })

  it('renders spinner variant by default', () => {
    render(<Loading />)
    const el = screen.getByRole('status')
    expect(el.querySelector('svg')).toBeInTheDocument()
  })

  it('applies spinner size classes', () => {
    render(<Loading size="sm" />)
    const svg = screen.getByRole('status').querySelector('svg')
    expect(svg?.className.baseVal).toContain('h-4')
  })

  it('applies color scheme to spinner', () => {
    render(<Loading colorScheme="danger" />)
    const svg = screen.getByRole('status').querySelector('svg')
    expect(svg?.className.baseVal).toContain('text-danger')
  })

  it('renders dots variant with 3 dots', () => {
    render(<Loading variant="dots" />)
    const el = screen.getByRole('status')
    const dots = el.querySelectorAll('span span')
    expect(dots).toHaveLength(3)
  })

  it('applies color scheme to dots', () => {
    render(<Loading variant="dots" colorScheme="success" />)
    const el = screen.getByRole('status')
    const dots = el.querySelectorAll('span span')
    dots.forEach((dot) => {
      expect(dot.className).toContain('bg-success')
    })
  })

  it('applies dot size classes', () => {
    render(<Loading variant="dots" size="lg" />)
    const el = screen.getByRole('status')
    const dots = el.querySelectorAll('span span')
    dots.forEach((dot) => {
      expect(dot.className).toContain('h-2')
    })
  })

  it('renders bars variant with 3 bars', () => {
    render(<Loading variant="bars" />)
    const el = screen.getByRole('status')
    const bars = el.querySelectorAll('span span')
    expect(bars).toHaveLength(3)
  })

  it('applies color scheme to bars', () => {
    render(<Loading variant="bars" colorScheme="warning" />)
    const el = screen.getByRole('status')
    const bars = el.querySelectorAll('span span')
    bars.forEach((bar) => {
      expect(bar.className).toContain('bg-warning')
    })
  })

  it('applies bar size classes', () => {
    render(<Loading variant="bars" size="sm" />)
    const el = screen.getByRole('status')
    const bars = el.querySelectorAll('span span')
    bars.forEach((bar) => {
      expect(bar.className).toContain('w-0.5')
    })
  })

  it('accepts custom className', () => {
    render(<Loading className="my-custom-class" />)
    const el = screen.getByRole('status')
    expect(el.className).toContain('my-custom-class')
  })
})
