import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import type { ColorScheme } from '../lib/types'

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  colorScheme?: ColorScheme
}

const accentMap: Record<ColorScheme, string> = {
  primary: 'accent-primary',
  secondary: 'accent-secondary',
  success: 'accent-success',
  warning: 'accent-warning',
  danger: 'accent-danger',
  info: 'accent-info',
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, error, colorScheme = 'primary', ...props }, ref) => {
    const generatedId = useId()
    const radioId = props.id || generatedId

    return (
      <div>
        <label
          htmlFor={radioId}
          className="flex cursor-pointer items-center gap-2 text-sm text-foreground"
        >
          <input
            ref={ref}
            type="radio"
            id={radioId}
            className={['h-4 w-4', accentMap[colorScheme], className ?? ''].join(' ')}
            {...props}
          />
          {label}
        </label>
        {error && (
          <p className="mt-1 ps-1.5 text-xs text-danger" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)
Radio.displayName = 'Radio'
