import { cn } from '../../../lib/cn'
import type { ColorScheme } from '../../../types'

const headerSolidBg: Record<ColorScheme, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  info: 'bg-info',
}

const headerSolidText: Record<ColorScheme, string> = {
  primary: 'text-primary-foreground',
  secondary: 'text-secondary-foreground',
  success: 'text-success-foreground',
  warning: 'text-warning-foreground',
  danger: 'text-danger-foreground',
  info: 'text-info-foreground',
}

const headerSoftBg: Record<ColorScheme, string> = {
  primary: 'bg-primary/10',
  secondary: 'bg-secondary/10',
  success: 'bg-success/10',
  warning: 'bg-warning/10',
  danger: 'bg-danger/10',
  info: 'bg-info/10',
}

const headerSoftText: Record<ColorScheme, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
}

const headerBaseClass = 'flex w-full items-center justify-between px-4 pt-3 pb-2 text-sm font-medium text-left'

const rootClass = 'rounded-lg border border-border bg-card shadow-sm overflow-hidden'
const bodyGridClass = 'grid transition-[grid-template-rows] duration-200'
const chevronBaseClass = 'h-4 w-4 shrink-0 transition-transform duration-200'

export const bodyClipClass = 'overflow-hidden'
export const bodyContentClass = 'px-4 py-3'

export function panelClass(className?: string) {
  return cn(rootClass, className)
}

export function headerClass(colorScheme: ColorScheme | undefined, isSolid: boolean | undefined) {
  if (!colorScheme) return headerBaseClass + ' text-foreground'
  const schemeClass = isSolid
    ? headerSolidBg[colorScheme] + ' ' + headerSolidText[colorScheme]
    : headerSoftBg[colorScheme] + ' ' + headerSoftText[colorScheme]
  return headerBaseClass + ' ' + schemeClass
}

export function chevronClass(collapsed: boolean) {
  return chevronBaseClass + (collapsed ? ' -rotate-90' : '')
}

export function bodyClass(collapsed: boolean) {
  return bodyGridClass + ' ' + (collapsed ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]')
}
