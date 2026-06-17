import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Spinner } from '../lib/Icons'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  children?: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:brightness-110',
  secondary: 'bg-secondary text-secondary-foreground hover:brightness-110',
  danger: 'bg-danger text-danger-foreground hover:brightness-110',
  ghost: 'text-foreground hover:bg-muted',
  outline: 'border border-border text-foreground hover:bg-muted',
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
  ({ variant = 'primary', size = 'md', loading, disabled, className, children, ...props }, ref) => {
    const cls = [
      baseClass,
      variantStyles[variant],
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
