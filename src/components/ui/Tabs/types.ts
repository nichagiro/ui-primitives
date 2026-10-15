import type { ReactNode } from 'react'
import type { ColorScheme } from '../../../types'

export type TabsVariant = 'underline' | 'pill' | 'cards'

export type TabsItem = {
  value: string
  label: ReactNode
  content: ReactNode
  disabled?: boolean
}

export type TabsProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  variant?: TabsVariant
  colorScheme?: ColorScheme
  tabs: TabsItem[]
  /** Mantiene montados los paneles inactivos (preserva su estado) en vez de desmontarlos. Default: false. */
  keepMounted?: boolean
  className?: string
}
