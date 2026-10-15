import { cn } from '../../../lib/cn'
import type { ColorScheme } from '../../../types'
import type { LoadingSize } from './types'

const spinnerSizes: Record<LoadingSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-10 w-10',
}

const dotSizes: Record<LoadingSize, { dot: string; gap: string }> = {
  sm: { dot: 'h-1 w-1', gap: 'gap-1' },
  md: { dot: 'h-1.5 w-1.5', gap: 'gap-1.5' },
  lg: { dot: 'h-2 w-2', gap: 'gap-2' },
}

const barSizes: Record<LoadingSize, { bar: string; height: string }> = {
  sm: { bar: 'w-0.5', height: 'h-3' },
  md: { bar: 'w-1', height: 'h-4' },
  lg: { bar: 'w-1.5', height: 'h-6' },
}

const schemeStyles: Record<ColorScheme, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
}

const bgSchemeStyles: Record<ColorScheme, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  info: 'bg-info',
}

export function loadingClass(className?: string) {
  return cn('inline-flex items-center justify-center', className)
}

export function spinnerClass(size: LoadingSize, colorScheme: ColorScheme) {
  return spinnerSizes[size] + ' ' + schemeStyles[colorScheme]
}

export function dotsWrapperClass(size: LoadingSize) {
  return 'inline-flex items-center ' + dotSizes[size].gap
}

export function dotClass(size: LoadingSize, colorScheme: ColorScheme) {
  return dotSizes[size].dot + ' block rounded-full ' + bgSchemeStyles[colorScheme] + ' animate-bounce'
}

export function barsWrapperClass() {
  return 'inline-flex items-end gap-0.5'
}

export function barClass(size: LoadingSize, colorScheme: ColorScheme) {
  const { bar, height } = barSizes[size]
  return bar + ' ' + height + ' rounded-full ' + bgSchemeStyles[colorScheme] + ' animate-pulse'
}
