import type { InputHTMLAttributes } from 'react'
import type { FormFieldProps } from '../FieldWrapper/types'

export type RadioOption = {
  label: string
  value: string
  disabled?: boolean
}

export type RadioGroupProps = InputHTMLAttributes<HTMLInputElement> & FormFieldProps & {
  options: RadioOption[]
  orientation?: 'vertical' | 'horizontal'
}