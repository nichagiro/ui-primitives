import { type InputHTMLAttributes } from 'react'
import type { ColorScheme } from '../../types'

export type RadioOption = {
  label: string
  value: string
  disabled?: boolean
}

export type RadioGroupProps = {
  label: string
  options: RadioOption[]
  error?: string
  colorScheme?: ColorScheme
  className?: string
  orientation?: 'vertical' | 'horizontal'
} & InputHTMLAttributes<HTMLInputElement>

const radioChecked: Record<ColorScheme, string> = {
  primary: 'peer-checked:border-primary',
  secondary: 'peer-checked:border-secondary',
  success: 'peer-checked:border-success',
  warning: 'peer-checked:border-warning',
  danger: 'peer-checked:border-danger',
  info: 'peer-checked:border-info',
}

const radioFocusRing: Record<ColorScheme, string> = {
  primary: 'peer-focus-visible:ring-primary/30',
  secondary: 'peer-focus-visible:ring-secondary/30',
  success: 'peer-focus-visible:ring-success/30',
  warning: 'peer-focus-visible:ring-warning/30',
  danger: 'peer-focus-visible:ring-danger/30',
  info: 'peer-focus-visible:ring-info/30',
}

const radioDot: Record<ColorScheme, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  info: 'bg-info',
}

export function RadioGroup({ className, label, options, error, colorScheme = 'primary', orientation = 'vertical', ...props }: RadioGroupProps) {
  return (
    <fieldset className={className}>
      <legend className="mb-2 text-xs font-medium text-primary">{label}</legend>
      <div className={orientation === 'horizontal' ? 'flex flex-wrap gap-4' : 'space-y-2'}>
        {options.map((option) => (
          <label key={option.value} className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
            <div className="relative h-4 w-4 shrink-0">
              <input
                type="radio"
                value={option.value}
                disabled={props.disabled || option.disabled}
                className="peer sr-only"
                {...props}
              />
              <div className={[
                'flex h-4 w-4 items-center justify-center rounded-full',
                error ? 'border border-danger peer-hover:border-danger' : 'border border-border peer-hover:border-foreground/30',
                'bg-card transition-all',
                'peer-disabled:opacity-60',
                'peer-focus-visible:ring-2',
                error ? 'peer-focus-visible:ring-danger/30' : radioFocusRing[colorScheme],
                radioChecked[colorScheme],
              ].join(' ')} />
              <div className={[
                'pointer-events-none absolute inset-0 flex h-4 w-4 items-center justify-center',
                'opacity-0 transition-opacity peer-checked:opacity-100',
              ].join(' ')}>
                <div className={'h-2 w-2 rounded-full ' + radioDot[colorScheme]} />
              </div>
            </div>
            {option.label}
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-1 text-xs text-danger" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}
