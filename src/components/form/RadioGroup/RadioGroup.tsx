import { FormError } from '../FormError'
import { radioBoxClass, radioOverlay, radioDotClass } from './styles'
import type { RadioGroupProps } from './types'

export function RadioGroup({ className, label, options, error, colorScheme = 'primary', orientation = 'vertical', isRequired, ...props }: RadioGroupProps) {
  return (
    <fieldset className={className}>
      <legend className="mb-2 text-xs font-medium text-primary">
        {label}{isRequired && <span className="ml-0.5 text-danger">*</span>}
      </legend>
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
              <div className={radioBoxClass(colorScheme, error)} />
              <div className={radioOverlay}>
                <div className={radioDotClass(colorScheme)} />
              </div>
            </div>
            {option.label}
          </label>
        ))}
      </div>
      <FormError message={error} className="ps-0" />
    </fieldset>
  )
}