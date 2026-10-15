import type { ReactNode } from 'react'
import { cn } from '../../../lib/cn'
import type { Column, Density } from './types'
import type { ColorScheme } from '../../../types'

export function estimateRowHeight(density: Density): number {
  return density === 'compact' ? 37 : 53
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

const selectedText: Record<ColorScheme, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
}

const selectAllCls: Record<ColorScheme, string> = {
  primary: 'border-primary bg-primary text-primary-foreground',
  secondary: 'border-secondary bg-secondary text-secondary-foreground',
  success: 'border-success bg-success text-success-foreground',
  warning: 'border-warning bg-warning text-warning-foreground',
  danger: 'border-danger bg-danger text-danger-foreground',
  info: 'border-info bg-info text-info-foreground',
}

export const expandButtonClass = 'flex w-full items-center justify-center py-1 text-muted-foreground transition-colors hover:text-foreground'
export const editButtonClass = 'ml-auto inline-flex h-5 w-5 shrink-0 items-center justify-center rounded text-muted-foreground opacity-0 transition-opacity hover:text-foreground focus-visible:opacity-100 group-hover/edit:opacity-100 disabled:opacity-0'

export function getSelectAllButtonClass(active: boolean, colorScheme: ColorScheme): string {
  return cn(
    'mx-auto flex h-4 w-4 items-center justify-center rounded border transition-colors',
    active ? selectAllCls[colorScheme] : 'border-muted-foreground/40 hover:border-muted-foreground/60',
  )
}

export function getExpandChevronClass(isExpanded: boolean): string {
  return cn('h-4 w-4 transition-transform', isExpanded && 'rotate-90')
}

export function getHeaderCellClass(thPadding: string, sortable: boolean | undefined, sticky: boolean, colClassName?: string): string {
  return cn(
    thPadding,
    'bg-muted text-left text-xs font-bold uppercase tracking-wider text-muted-foreground',
    sortable && 'cursor-pointer select-none hover:text-foreground',
    sticky && 'sticky left-0 z-20',
    colClassName,
  )
}

export function getRowClass(opts: {
  hasRowInteraction: boolean
  disabled: boolean
  isSelected: boolean
  colorScheme: ColorScheme
  rowClassName?: string
}): string {
  return cn(
    'transition-colors',
    opts.hasRowInteraction && opts.disabled && 'cursor-not-allowed',
    opts.hasRowInteraction && !opts.disabled && 'hover:brightness-95',
    opts.isSelected && selectedText[opts.colorScheme],
    opts.hasRowInteraction && !opts.disabled && 'cursor-pointer',
    opts.disabled && 'pointer-events-none opacity-50',
    opts.rowClassName,
  )
}

export function getFixedCellClass(tdPadding: string, idx: number, isSelected: boolean, striped: boolean, colorScheme: ColorScheme, rowClassName?: string): string {
  return cn(tdPadding, 'w-10 text-center', getRowBg(idx, isSelected, striped, colorScheme), rowClassName)
}

export function getDataCellClass(opts: {
  tdPadding: string
  idx: number
  isSelected: boolean
  striped: boolean
  colorScheme: ColorScheme
  sticky: boolean
  colClassName?: string
  rowClassName?: string
  isEditing: boolean
}): string {
  return cn(
    opts.tdPadding,
    getRowBg(opts.idx, opts.isSelected, opts.striped, opts.colorScheme),
    opts.sticky && 'sticky left-0 z-10',
    opts.colClassName,
    opts.rowClassName,
    opts.isEditing && 'p-0',
  )
}
