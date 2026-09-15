import type { TextareaHTMLAttributes, Ref } from 'react'
import type { FormFieldProps } from '../FieldWrapper/types'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & FormFieldProps & {
  ref?: Ref<HTMLTextAreaElement>
  resize?: 'none' | 'vertical' | 'both'
}