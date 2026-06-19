import type { ReactNode } from 'react'
import type { Column } from './types'
import type { ColorScheme } from '../../../lib/types'

export function cn(...classes: (string | boolean | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function getValue<T>(row: T, col: Column<T>): ReactNode {
  if (col.render) return col.render(row)
  if (col.key) return row[col.key] as ReactNode
  return null
}

const selectedBg: Record<ColorScheme, string> = {
  primary: 'bg-primary/10',
  secondary: 'bg-secondary/10',
  success: 'bg-success/10',
  warning: 'bg-warning/10',
  danger: 'bg-danger/10',
  info: 'bg-info/10',
}

export function getRowBg(idx: number, isSelected: boolean, striped: boolean, colorScheme: ColorScheme): string {
  if (isSelected) return selectedBg[colorScheme]
  if (!striped) return 'bg-card'
  return idx % 2 === 0 ? 'bg-card' : 'bg-muted'
}
