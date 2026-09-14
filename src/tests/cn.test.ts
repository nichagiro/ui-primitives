import { describe, it, expect } from 'vitest'
import { cn } from '../lib/cn'

describe('cn', () => {
  it('joins simple classes', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2')
  })

  it('dedupes conflicting background classes, keeping the last', () => {
    expect(cn('bg-card', 'bg-red-100')).toBe('bg-red-100')
  })

  it('dedupes conflicting text color classes', () => {
    expect(cn('text-foreground', 'text-primary')).toBe('text-primary')
  })

  it('dedupes conflicting padding classes (p vs px/py)', () => {
    expect(cn('px-4 py-3', 'p-0')).toBe('p-0')
  })

  it('dedupes conflicting border-color classes', () => {
    expect(cn('border-border', 'border-danger')).toBe('border-danger')
  })

  it('preserves non-conflicting classes', () => {
    expect(cn('px-4', 'text-primary', 'font-bold')).toBe('px-4 text-primary font-bold')
  })

  it('filters out false, null, undefined and empty strings', () => {
    expect(cn('px-4', false, null, undefined, '', 'py-2')).toBe('px-4 py-2')
  })

  it('preserves arbitrary/custom classes that are not Tailwind conflicts', () => {
    expect(cn('bg-card', 'custom-row-1')).toBe('bg-card custom-row-1')
  })

  it('handles variant-prefixed classes as distinct groups', () => {
    expect(cn('border-border', 'focus-within:border-primary', 'focus-within:ring-primary/30')).toBe(
      'border-border focus-within:border-primary focus-within:ring-primary/30',
    )
  })

  it('returns empty string with no truthy classes', () => {
    expect(cn(false, null, undefined)).toBe('')
  })
})
