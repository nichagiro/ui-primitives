import { Spinner } from '../../../lib/Icons'
import { cn } from '../../../lib/cn'
import { baseClass, schemeStyles, sizeStyles } from './styles'
import type { ButtonProps } from './types'

export function Button({ variant = 'solid', colorScheme = 'primary', size = 'md', loading, disabled, className, children, ref, type = 'button', ...props }: ButtonProps) {
  const cls = cn(
    baseClass,
    schemeStyles[colorScheme][variant],
    sizeStyles[size],
    className,
  )

  return (
    <button
      ref={ref}
      type={type}
      className={cls}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner className="h-4 w-4" />}
      {children}
    </button>
  )
}
