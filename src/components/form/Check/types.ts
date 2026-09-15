import type { InputHTMLAttributes, Ref } from 'react'
import type { FormFieldProps } from '../FieldWrapper/types'

export type CheckProps = InputHTMLAttributes<HTMLInputElement> & FormFieldProps & {
  ref?: Ref<HTMLInputElement>
  variant?: 'checkbox' | 'switch'
}