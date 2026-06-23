import { useId, type InputHTMLAttributes, type Ref } from 'react'
import { CheckIcon } from '../../lib/Icons'

import type { ColorScheme } from '../../types'
export type CheckProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>
  label: string
  required?: boolean
  error?: string
  variant?: 'checkbox' | 'switch'
  colorScheme?: ColorScheme
}

const checkboxChecked: Record<ColorScheme, string> = {
  primary: 'peer-checked:bg-primary peer-checked:border-primary',
  secondary: 'peer-checked:bg-secondary peer-checked:border-secondary',
  success: 'peer-checked:bg-success peer-checked:border-success',
  warning: 'peer-checked:bg-warning peer-checked:border-warning',
  danger: 'peer-checked:bg-danger peer-checked:border-danger',
  info: 'peer-checked:bg-info peer-checked:border-info',
}

const checkboxFocusRing: Record<ColorScheme, string> = {
  primary: 'peer-focus-visible:ring-primary/30',
  secondary: 'peer-focus-visible:ring-secondary/30',
  success: 'peer-focus-visible:ring-success/30',
  warning: 'peer-focus-visible:ring-warning/30',
  danger: 'peer-focus-visible:ring-danger/30',
  info: 'peer-focus-visible:ring-info/30',
}

const checkIconColor: Record<ColorScheme, string> = {
  primary: 'text-primary-foreground',
  secondary: 'text-secondary-foreground',
  success: 'text-success-foreground',
  warning: 'text-warning-foreground',
  danger: 'text-danger-foreground',
  info: 'text-info-foreground',
}

const switchBg: Record<ColorScheme, string> = {
  primary: 'peer-checked:bg-primary',
  secondary: 'peer-checked:bg-secondary',
  success: 'peer-checked:bg-success',
  warning: 'peer-checked:bg-warning',
  danger: 'peer-checked:bg-danger',
  info: 'peer-checked:bg-info',
}

const switchFocusRing: Record<ColorScheme, string> = {
  primary: 'peer-focus-visible:ring-2 peer-focus-visible:ring-primary/30',
  secondary: 'peer-focus-visible:ring-2 peer-focus-visible:ring-secondary/30',
  success: 'peer-focus-visible:ring-2 peer-focus-visible:ring-success/30',
  warning: 'peer-focus-visible:ring-2 peer-focus-visible:ring-warning/30',
  danger: 'peer-focus-visible:ring-2 peer-focus-visible:ring-danger/30',
  info: 'peer-focus-visible:ring-2 peer-focus-visible:ring-info/30',
}

export function Check({ className, label, required, error, variant = 'checkbox', colorScheme = 'primary', ref, ...props }: CheckProps) {
    const generatedId = useId()
    const checkId = props.id || generatedId

    if (variant === 'switch') {
      return (
        <div className={className}>
          <label htmlFor={checkId} className="inline-flex cursor-pointer items-center gap-3">
            <div className="relative">
              <input
                ref={ref}
                type="checkbox"
                id={checkId}
                required={required}
                className="peer sr-only"
                {...props}
              />
              <div className={[
                'h-6 w-10 rounded-full bg-muted transition-colors',
                switchBg[colorScheme],
                error ? 'peer-focus-visible:ring-2 peer-focus-visible:ring-danger/30' : switchFocusRing[colorScheme],
                'after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-background after:shadow-sm after:transition-all peer-checked:after:translate-x-4',
              ].join(' ')} />
            </div>
            <span className="text-sm text-foreground select-none">
              {label}{required && <span className="ml-0.5 text-danger">*</span>}
            </span>
          </label>
          {error && (
            <p className="mt-1 ps-1.5 text-xs text-danger" role="alert">
              {error}
            </p>
          )}
        </div>
      )
    }

    return (
      <div className={className}>
        <label htmlFor={checkId} className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
          <div className="relative h-4 w-4 shrink-0">
              <input
                ref={ref}
                type="checkbox"
                id={checkId}
                required={required}
                className="peer sr-only"
                {...props}
              />
              <div className={[
                'flex h-4 w-4 items-center justify-center rounded',
                error ? 'border border-danger peer-hover:border-danger' : 'border border-border peer-hover:border-foreground/30',
                'bg-card transition-all',
                'peer-disabled:opacity-60',
                'peer-focus-visible:ring-2',
                error ? 'peer-focus-visible:ring-danger/30' : checkboxFocusRing[colorScheme],
                checkboxChecked[colorScheme],
              ].join(' ')} />
              <CheckIcon
                className={[
                  'pointer-events-none absolute inset-0 h-4 w-4 p-0.5',
                  'opacity-0 transition-opacity peer-checked:opacity-100',
                  checkIconColor[colorScheme],
                ].join(' ')}
              />
            </div>
            {label}{required && <span className="ml-0.5 text-danger">*</span>}
        </label>
        {error && (
          <p className="mt-1 ps-1.5 text-xs text-danger" role="alert">
            {error}
          </p>
        )}
      </div>
    )
}
