import type { ReactNode } from 'react'

export type ChipVariant = 'default' | 'primary' | 'success' | 'warning' | 'error'
export type ChipSize = 'sm' | 'md'

export type ChipProps = {
  variant?: ChipVariant
  size?: ChipSize
  children: ReactNode
  onDismiss?: () => void
  className?: string
}
