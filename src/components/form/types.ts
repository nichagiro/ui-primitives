import type {
  InputHTMLAttributes,
  ReactNode,
  Ref,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'
import type { ColorScheme } from '../../types'

export type FormFieldProps = {
  label: string
  error?: string
  colorScheme?: ColorScheme
  isRequired?: boolean
}

export type FieldWrapperProps = FormFieldProps & {
  htmlFor?: string
  children: ReactNode
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & FormFieldProps & {
  ref?: Ref<HTMLInputElement>
}

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & FormFieldProps & {
  ref?: Ref<HTMLTextAreaElement>
  resize?: 'none' | 'vertical' | 'both'
}

export type OptionValue = string | number

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'> & FormFieldProps & {
  ref?: Ref<HTMLSelectElement>
  placeholder?: string
  multiple?: boolean
  selectAll?: boolean
  searchable?: boolean
  loading?: boolean
  defaultValue?: OptionValue | OptionValue[]
  value?: OptionValue | OptionValue[]
}

export type CheckProps = InputHTMLAttributes<HTMLInputElement> & FormFieldProps & {
  ref?: Ref<HTMLInputElement>
  variant?: 'checkbox' | 'switch'
}

export type RadioOption = {
  label: string
  value: string
  disabled?: boolean
}

export type RadioGroupProps = InputHTMLAttributes<HTMLInputElement> & FormFieldProps & {
  options: RadioOption[]
  orientation?: 'vertical' | 'horizontal'
}

export type FileUploadProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'children'> & FormFieldProps & {
  ref?: Ref<HTMLInputElement>
  multiple?: boolean
  maxSize?: number
  files?: File[]
  onFilesChange?: (files: File[]) => void
}

export type FormErrorProps = {
  message?: string
  className?: string
}
