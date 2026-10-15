import type { ColorScheme } from '../../../types'
import type { TabsVariant } from './types'

export const tablistStyles: Record<TabsVariant, string> = {
  underline: 'flex border-b border-border',
  pill: 'flex gap-1 p-1 bg-muted rounded-lg',
  cards: 'flex gap-0',
}

const activeTabStyles: Record<TabsVariant, Record<ColorScheme, string>> = {
  underline: {
    primary: 'text-primary border-primary',
    secondary: 'text-secondary border-secondary',
    success: 'text-success border-success',
    warning: 'text-warning border-warning',
    danger: 'text-danger border-danger',
    info: 'text-info border-info',
  },
  pill: {
    primary: 'bg-primary text-primary-foreground shadow-sm rounded-md',
    secondary: 'bg-secondary text-secondary-foreground shadow-sm rounded-md',
    success: 'bg-success text-success-foreground shadow-sm rounded-md',
    warning: 'bg-warning text-warning-foreground shadow-sm rounded-md',
    danger: 'bg-danger text-danger-foreground shadow-sm rounded-md',
    info: 'bg-info text-info-foreground shadow-sm rounded-md',
  },
  cards: {
    primary: 'bg-card text-primary border border-border border-b-card -mb-px rounded-t-lg',
    secondary: 'bg-card text-secondary border border-border border-b-card -mb-px rounded-t-lg',
    success: 'bg-card text-success border border-border border-b-card -mb-px rounded-t-lg',
    warning: 'bg-card text-warning border border-border border-b-card -mb-px rounded-t-lg',
    danger: 'bg-card text-danger border border-border border-b-card -mb-px rounded-t-lg',
    info: 'bg-card text-info border border-border border-b-card -mb-px rounded-t-lg',
  },
}

const inactiveTabBase: Record<TabsVariant, string> = {
  underline: 'text-muted-foreground hover:text-foreground border-transparent',
  pill: 'text-muted-foreground hover:text-foreground rounded-md',
  cards: 'text-muted-foreground hover:text-foreground bg-muted/50 border border-transparent rounded-t-lg',
}

const tabPadding: Record<TabsVariant, string> = {
  underline: 'px-4 py-2',
  pill: 'px-4 py-1.5',
  cards: 'px-4 py-2',
}

export const panelStyles: Record<TabsVariant, string> = {
  underline: 'py-4 text-sm text-foreground',
  pill: 'py-4 text-sm text-foreground',
  cards: 'relative -mt-px border border-border rounded-b-lg rounded-tr-lg p-4 text-sm text-foreground',
}

export function tabClass(variant: TabsVariant, colorScheme: ColorScheme, isActive: boolean, disabled?: boolean) {
  return [
    'font-medium cursor-pointer transition-colors',
    tabPadding[variant],
    isActive ? activeTabStyles[variant][colorScheme] : inactiveTabBase[variant],
    variant === 'underline' ? 'border-b-2 -mb-px' : '',
    disabled ? 'opacity-50 cursor-not-allowed' : '',
  ].join(' ')
}
