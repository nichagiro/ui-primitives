import type { ColorScheme } from '../../../types'

export const radioChecked: Record<ColorScheme, string> = {
  primary: 'peer-checked:border-primary',
  secondary: 'peer-checked:border-secondary',
  success: 'peer-checked:border-success',
  warning: 'peer-checked:border-warning',
  danger: 'peer-checked:border-danger',
  info: 'peer-checked:border-info',
}

export const radioFocusRing: Record<ColorScheme, string> = {
  primary: 'peer-focus-visible:ring-primary/30',
  secondary: 'peer-focus-visible:ring-secondary/30',
  success: 'peer-focus-visible:ring-success/30',
  warning: 'peer-focus-visible:ring-warning/30',
  danger: 'peer-focus-visible:ring-danger/30',
  info: 'peer-focus-visible:ring-info/30',
}

export const radioDot: Record<ColorScheme, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  info: 'bg-info',
}

export function radioBoxClass(colorScheme: ColorScheme, error?: string) {
  return [
    'flex h-4 w-4 items-center justify-center rounded-full',
    error ? 'border border-danger peer-hover:border-danger' : 'border border-border peer-hover:border-foreground/30',
    'bg-card transition-all',
    'peer-disabled:opacity-60',
    'peer-focus-visible:ring-2',
    error ? 'peer-focus-visible:ring-danger/30' : radioFocusRing[colorScheme],
    radioChecked[colorScheme],
  ].join(' ')
}

export const radioOverlay =
  'pointer-events-none absolute inset-0 flex h-4 w-4 items-center justify-center opacity-0 transition-opacity peer-checked:opacity-100'

export function radioDotClass(colorScheme: ColorScheme) {
  return 'h-2 w-2 rounded-full ' + radioDot[colorScheme]
}