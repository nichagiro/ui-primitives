import type { ReactNode } from 'react'
import type { ColorScheme } from '../../../types'

export type PanelProps = {
  colorScheme?: ColorScheme
  variant?: 'solid' | 'soft'
  title?: string
  children: ReactNode
  className?: string
}
