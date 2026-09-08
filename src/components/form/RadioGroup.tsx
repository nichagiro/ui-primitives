import { peerCheckedBorder, peerFocusRing, bgColor } from '../../lib/colorSchemes'
import type { RadioGroupProps } from './types'
import { FormError } from './FormError'

const radioChecked = peerCheckedBorder()
const radioFocusRing = peerFocusRing()
const radioDot = bgColor()

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
      <FormError message={error} className="ps-0" />
    </fieldset>
  )
}

export type { RadioGroupProps, RadioOption } from './types'
