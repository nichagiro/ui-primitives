import type { ReactNode } from 'react'
import type { ColorScheme } from '../../../types'

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