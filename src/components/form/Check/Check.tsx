import { useId } from 'react'
import { CheckIcon } from '../../../lib/Icons'
import { FormError } from '../FormError'
import { switchTrackClass, checkboxBoxClass, checkIconClass } from './styles'
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
            <div className={switchTrackClass(colorScheme, error)} />
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
          <div className={checkboxBoxClass(colorScheme, error)} />
          <CheckIcon className={checkIconClass(colorScheme)} />
        </div>
        {label}{isRequired && <span className="ml-0.5 text-danger">*</span>}
      </label>
      <FormError message={error} />
    </div>
  )
}
