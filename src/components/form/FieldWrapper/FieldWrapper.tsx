import { FormError } from '../FormError'
import { fieldContainerClass, fieldLabelClass } from './styles'
import type { FieldWrapperProps } from './types'

function FieldWrapper({ label, error, htmlFor, colorScheme = 'primary', isRequired, children }: FieldWrapperProps) {
  return (
    <div>
      <div className={fieldContainerClass(colorScheme, error)}>
        <label htmlFor={htmlFor} className={fieldLabelClass(colorScheme)}>
          {label}{isRequired && <span className="ml-0.5 text-danger">*</span>}
        </label>
        <div className="px-3">{children}</div>
      </div>
      <FormError message={error} />
    </div>
  )
}

export { FieldWrapper }