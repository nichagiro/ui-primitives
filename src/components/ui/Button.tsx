import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Spinner } from '../../lib/Icons'

import type { ColorScheme } from '../../lib/types'
export type ButtonVariant = 'solid' | 'soft' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  colorScheme?: ColorScheme
  size?: ButtonSize
  loading?: boolean
  children?: ReactNode
}

const schemeStyles: Record<ColorScheme, Record<ButtonVariant, string>> = {
  primary: {
    solid: 'bg-primary text-primary-foreground hover:brightness-110',
    soft: 'bg-primary/10 text-primary hover:bg-primary/15',
    ghost: 'text-primary hover:bg-primary/10',
  },
  secondary: {
    solid: 'bg-secondary text-secondary-foreground hover:brightness-110',
    soft: 'bg-secondary/20 text-secondary-foreground hover:bg-secondary/30',
    ghost: 'text-secondary hover:bg-secondary/10',
  },
  success: {
    solid: 'bg-success text-success-foreground hover:brightness-110',
    soft: 'bg-success/10 text-success hover:bg-success/15',
    ghost: 'text-success hover:bg-success/10',
  },
  warning: {
    solid: 'bg-warning text-warning-foreground hover:brightness-110',
    soft: 'bg-warning/10 text-warning hover:bg-warning/15',
    ghost: 'text-warning hover:bg-warning/10',
  },
  danger: {
    solid: 'bg-danger text-danger-foreground hover:brightness-110',
    soft: 'bg-danger/10 text-danger hover:bg-danger/15',
    ghost: 'text-danger hover:bg-danger/10',
  },
  info: {
    solid: 'bg-info text-info-foreground hover:brightness-110',
    soft: 'bg-info/10 text-info hover:bg-info/15',
    ghost: 'text-info hover:bg-info/10',
  },
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

const baseClass = [
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  'disabled:pointer-events-none disabled:opacity-50',
  'cursor-pointer select-none',
].join(' ')

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', colorScheme = 'primary', size = 'md', loading, disabled, className, children, ...props }, ref) => {
    const cls = [
      baseClass,
      schemeStyles[colorScheme][variant],
      sizeStyles[size],
      className ?? '',
    ].join(' ')

    return (
      <button
        ref={ref}
        className={cls}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Spinner className="h-4 w-4" />}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
