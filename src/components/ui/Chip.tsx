import { type ReactNode } from 'react'
import { CloseIcon } from '../../lib/Icons'

export type ChipVariant = 'default' | 'primary' | 'success' | 'warning' | 'error'
export type ChipSize = 'sm' | 'md'

export type ChipProps = {
  variant?: ChipVariant
  size?: ChipSize
  children: ReactNode
  onDismiss?: () => void
  className?: string
}

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

export function Chip({ variant = 'default', size = 'md', children, onDismiss, className }: ChipProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 rounded-full font-medium',
        variantStyles[variant],
        sizeStyles[size],
        className ?? '',
      ].join(' ')}
    >
      {children}
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="ml-0.5 inline-flex shrink-0 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100"
          aria-label="Eliminar"
        >
          <CloseIcon className="h-3 w-3" />
        </button>
      )}
    </span>
  )
}
