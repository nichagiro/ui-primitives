import { cn } from '../../../lib/cn'
import type { ChipSize, ChipVariant } from './types'

const variantStyles: Record<ChipVariant, string> = {
  default: 'bg-muted text-muted-foreground',
  primary: 'bg-primary/10 text-primary',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  error:   'bg-danger/10 text-danger',
}

const sizeStyles: Record<ChipSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
}

const baseClass = 'inline-flex items-center gap-1 rounded-full font-medium'

export const dismissButtonClass = 'ml-0.5 inline-flex shrink-0 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100'

export function chipClass(variant: ChipVariant, size: ChipSize, className?: string) {
  return cn(baseClass, variantStyles[variant], sizeStyles[size], className)
}
