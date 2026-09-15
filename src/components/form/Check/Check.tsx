import { useId } from 'react'
import { CheckIcon } from '../../../lib/Icons'
import { FormError } from '../FormError'
import { checkboxChecked, checkboxFocusRing, checkIconColor, switchBg, switchFocusRing } from './styles'
import type { CheckProps } from './types'

export function Check({ className, label, error, variant = 'checkbox', colorScheme = 'primary', isRequired, ref, ...props }: CheckProps) {
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
              {label}{isRequired && <span className="ml-0.5 text-danger">*</span>}
            </span>
          </label>
          <FormError message={error} />
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
            {label}{isRequired && <span className="ml-0.5 text-danger">*</span>}
        </label>
        <FormError message={error} />
      </div>
    )
}