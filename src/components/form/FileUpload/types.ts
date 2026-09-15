import type { InputHTMLAttributes, Ref } from 'react'
import type { FormFieldProps } from '../FieldWrapper/types'

export type FileUploadProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'children'> & FormFieldProps & {
  ref?: Ref<HTMLInputElement>
  multiple?: boolean
  maxSize?: number
  files?: File[]
  onFilesChange?: (files: File[]) => void
}