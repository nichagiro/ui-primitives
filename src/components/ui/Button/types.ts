import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react'
import type { ColorScheme } from '../../../types'

export type ButtonVariant = 'solid' | 'soft' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: Ref<HTMLButtonElement>
  variant?: ButtonVariant
  colorScheme?: ColorScheme
  size?: ButtonSize
  loading?: boolean
  children?: ReactNode
}
