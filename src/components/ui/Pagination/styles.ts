import type { ColorScheme } from '../../../types'

const activePage: Record<ColorScheme, string> = {
  primary: 'bg-primary text-primary-foreground shadow-sm',
  secondary: 'bg-secondary text-secondary-foreground shadow-sm',
  success: 'bg-success text-success-foreground shadow-sm',
  warning: 'bg-warning text-warning-foreground shadow-sm',
  danger: 'bg-danger text-danger-foreground shadow-sm',
  info: 'bg-info text-info-foreground shadow-sm',
}

export const wrapperClass = 'flex flex-col items-center gap-3 sm:flex-row sm:justify-between'
export const infoClass = 'text-sm text-muted-foreground'
export const navClass = 'flex items-center gap-1'
export const dotsClass = 'px-2 text-sm text-muted-foreground'

export const navButtonClass = 'inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40'

export function pageButtonClass(colorScheme: ColorScheme, active: boolean) {
  return 'inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors '
    + (active ? activePage[colorScheme] : 'text-muted-foreground hover:bg-muted hover:text-foreground')
}
