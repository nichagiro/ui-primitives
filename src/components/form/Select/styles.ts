import type { ColorScheme } from '../../../types'

export const focusRing: Record<ColorScheme, string> = {
  primary: 'focus:border-primary focus:ring-1 focus:ring-primary',
  secondary: 'focus:border-secondary focus:ring-1 focus:ring-secondary',
  success: 'focus:border-success focus:ring-1 focus:ring-success',
  warning: 'focus:border-warning focus:ring-1 focus:ring-warning',
  danger: 'focus:border-danger focus:ring-1 focus:ring-danger',
  info: 'focus:border-info focus:ring-1 focus:ring-info',
}

export const checkboxSelected: Record<ColorScheme, string> = {
  primary: 'border-primary bg-primary text-primary-foreground',
  secondary: 'border-secondary bg-secondary text-secondary-foreground',
  success: 'border-success bg-success text-success-foreground',
  warning: 'border-warning bg-warning text-warning-foreground',
  danger: 'border-danger bg-danger text-danger-foreground',
  info: 'border-info bg-info text-info-foreground',
}

export const optionSelected: Record<ColorScheme, string> = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  danger: 'bg-danger/10 text-danger',
  info: 'bg-info/10 text-info',
}

export const triggerBaseClass = [
  'flex w-full items-center justify-between gap-2 text-sm outline-none select-none pb-2',
  'disabled:cursor-not-allowed',
].join(' ')

export function triggerValueClass(hasValue: boolean) {
  return 'truncate ' + (hasValue ? 'text-foreground' : 'text-muted-foreground')
}

export function chevronClass(isOpen: boolean) {
  return 'h-4 w-4 shrink-0 text-muted-foreground transition-transform' + (isOpen ? ' rotate-180' : '')
}

export const listboxClass = 'fixed z-50 overflow-y-auto scrollbar-none rounded-md border border-border bg-card shadow-lg'

export const searchWrapperClass = 'sticky top-0 border-b border-border bg-card p-2'

export const searchInputBaseClass = 'w-full rounded-md border border-border bg-background px-2 py-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground'

export function searchInputClass(colorScheme: ColorScheme) {
  return searchInputBaseClass + ' ' + focusRing[colorScheme]
}

export function selectAllOptionClass(highlighted: boolean) {
  return 'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors text-foreground border-b border-border'
    + (highlighted ? ' bg-muted' : '')
}

export function optionRowClass(highlighted: boolean, selected: boolean, colorScheme: ColorScheme) {
  return 'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors text-foreground'
    + (highlighted ? ' bg-muted' : '')
    + (selected ? ' ' + optionSelected[colorScheme] : '')
}

export function optionCheckboxClass(checked: boolean, colorScheme: ColorScheme) {
  return 'inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors '
    + (checked ? checkboxSelected[colorScheme] : 'border-border')
}

export function optionCheckIconClass(checked: boolean) {
  return 'h-3 w-3 transition-opacity ' + (checked ? 'opacity-100' : 'opacity-0')
}