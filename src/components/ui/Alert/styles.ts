import { cn } from '../../../lib/cn'
import type { AlertVariant } from './types'

const variantStyles: Record<AlertVariant, string> = {
  info:    'border-info bg-info/10 text-info',
  success: 'border-success bg-success/10 text-success',
  warning: 'border-warning bg-warning/10 text-warning',
  error:   'border-danger bg-danger/10 text-danger',
}

const baseClass = 'flex items-start gap-3 rounded-md border px-4 py-3 text-sm'

export const dismissButtonClass = 'shrink-0 rounded p-1 opacity-60 transition-opacity hover:opacity-100'

export function alertClass(variant: AlertVariant, className?: string) {
  return cn(baseClass, variantStyles[variant], className)
}
