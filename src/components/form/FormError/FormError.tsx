import { cn } from '../../../lib/cn'
import type { FormErrorProps } from './types'

export function FormError({ message, className }: FormErrorProps) {
  if (!message) return null

  return (
    <p className={cn('mt-1 text-xs text-danger ps-1.5', className)} role="alert">
      {message}
    </p>
  )
}