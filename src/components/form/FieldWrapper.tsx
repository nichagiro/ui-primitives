import { focusWithinRing, textColor } from '../../lib/colorSchemes'
import { cn } from '../../lib/cn'
import type { FieldWrapperProps } from './types'
import { FormError } from './FormError'

const focusRing = focusWithinRing()
const labelColor = textColor()

const containerCls = [
  'rounded-lg border border-border bg-card shadow-sm transition-all duration-200',
  'has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60',
  'focus-within:shadow-md focus-within:ring-2',
]

function FieldWrapper({ label, error, htmlFor, colorScheme = 'primary', isRequired, children }: FieldWrapperProps) {
  const borderCls = error
    ? 'border-danger focus-within:border-danger focus-within:ring-danger/10'
    : focusRing[colorScheme]

  return (
    <div>
      <div className={cn(...containerCls, borderCls)}>
        <label htmlFor={htmlFor} className={'block px-3 pt-2 text-xs font-medium ' + labelColor[colorScheme]}>
          {label}{isRequired && <span className="ml-0.5 text-danger">*</span>}
        </label>
        <div className="px-3">{children}</div>
      </div>
      <FormError message={error} />
    </div>
  )
}

export { FieldWrapper }
export type { FieldWrapperProps } from './types'
