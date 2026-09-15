import { describe, it, expect } from 'vitest'
import { cn } from '../lib/cn'

describe('cn', () => {
  it('returns empty string for no args', () => {
    expect(cn()).toBe('')
  })

  it('filters falsy values', () => {
    expect(cn('a', false, null, undefined, '', 'b')).toBe('a b')
  })

  it('joins multiple classes', () => {
    expect(cn('px-4', 'py-2', 'text-sm')).toBe('px-4 py-2 text-sm')
  })

  describe('bg-* merge', () => {
    it('removes earlier bg-* when a later one exists', () => {
      expect(cn('bg-card', 'bg-red-200')).toBe('bg-red-200')
    })

    it('keeps only the last bg-* among many', () => {
      expect(cn('bg-card', 'bg-red-200', 'bg-blue-300')).toBe('bg-blue-300')
    })

    it('does not remove non-bg classes', () => {
      expect(cn('px-4', 'bg-card', 'text-red-500', 'bg-red-200')).toBe('px-4 text-red-500 bg-red-200')
    })

    it('handles bg with opacity modifiers', () => {
      expect(cn('bg-primary/10', 'bg-danger/50')).toBe('bg-danger/50')
    })

    it('treats bg-transparent as a color class', () => {
      expect(cn('bg-card', 'bg-transparent')).toBe('bg-transparent')
    })

    it('keeps gradient alongside bg color (no conflict)', () => {
      expect(cn('bg-gradient-to-r', 'bg-red-200')).toBe('bg-gradient-to-r bg-red-200')
    })

    it('keeps bg-clip alongside bg color (no conflict)', () => {
      expect(cn('bg-clip-text', 'bg-card')).toBe('bg-clip-text bg-card')
    })

    it('returns the single bg-* when only one exists', () => {
      expect(cn('px-4', 'bg-card', 'py-2')).toBe('px-4 bg-card py-2')
    })

    it('handles no bg-* classes at all', () => {
      expect(cn('px-4', 'py-2', 'text-sm')).toBe('px-4 py-2 text-sm')
    })
  })
})