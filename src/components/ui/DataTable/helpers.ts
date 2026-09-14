import type { ReactNode } from 'react'
import type { Column, Density } from './types'
import type { ColorScheme } from '../../../types'
import { bgColorAlpha, focusRing, accentColor } from '../../../lib/colorSchemes'

export function estimateRowHeight(density: Density): number {
  return density === 'compact' ? 37 : 53
}

export function getValue<T>(row: T, col: Column<T>): ReactNode {
  if (col.render) return col.render(row)
  if (col.key) return row[col.key] as ReactNode
  return null
}

const selectedBg = bgColorAlpha(10)

export function getRowBg(idx: number, isSelected: boolean, striped: boolean, colorScheme: ColorScheme): string {
  if (isSelected) return selectedBg[colorScheme]
  if (!striped) return 'bg-card'
  return idx % 2 === 0 ? 'bg-card' : 'bg-muted'
}

const editFocusRing = focusRing()
const editAccent = accentColor()

export const editBaseClass = [
  'w-full rounded-md border border-border bg-background px-2 py-1 text-sm',
  'text-foreground outline-none placeholder:text-muted-foreground',
  'transition-colors',
].join(' ')

export function getEditClass(colorScheme: ColorScheme): string {
  return editBaseClass + ' ' + editFocusRing[colorScheme]
}

export function getEditAccent(colorScheme: ColorScheme): string {
  return editAccent[colorScheme]
}
