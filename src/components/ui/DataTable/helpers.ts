import type { ReactNode } from 'react'
import type { Column, Density } from './types'
import type { ColorScheme } from '../../../types'

export function estimateRowHeight(density: Density): number {
  return density === 'compact' ? 37 : 53
}

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

const editFocusRing: Record<ColorScheme, string> = {
  primary: 'focus:border-primary focus:ring-1 focus:ring-primary',
  secondary: 'focus:border-secondary focus:ring-1 focus:ring-secondary',
  success: 'focus:border-success focus:ring-1 focus:ring-success',
  warning: 'focus:border-warning focus:ring-1 focus:ring-warning',
  danger: 'focus:border-danger focus:ring-1 focus:ring-danger',
  info: 'focus:border-info focus:ring-1 focus:ring-info',
}

const editAccent: Record<ColorScheme, string> = {
  primary: 'accent-primary',
  secondary: 'accent-secondary',
  success: 'accent-success',
  warning: 'accent-warning',
  danger: 'accent-danger',
  info: 'accent-info',
}

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
