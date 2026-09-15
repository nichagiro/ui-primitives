import { FormError } from '../FormError'
import { containerCls, focusRing, labelColor } from './styles'
import type { FieldWrapperProps } from './types'

function FieldWrapper({ label, error, htmlFor, colorScheme = 'primary', isRequired, children }: FieldWrapperProps) {
  const borderCls = error
    ? 'border-danger focus-within:border-danger focus-within:ring-danger/10'
    : focusRing[colorScheme]

  return (
    <div>
      <div className={containerCls + ' ' + borderCls}>
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