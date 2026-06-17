import type { ReactNode } from 'react'
import type { Column } from './types'

export function cn(...classes: (string | boolean | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function getValue<T>(row: T, col: Column<T>): ReactNode {
  if (col.render) return col.render(row)
  if (col.key) return row[col.key] as ReactNode
  return null
}

export function getRowBg(idx: number, isSelected: boolean, striped: boolean): string {
  if (isSelected) return 'bg-primary/10'
  if (!striped) return 'bg-card'
  return idx % 2 === 0 ? 'bg-card' : 'bg-muted'
}
