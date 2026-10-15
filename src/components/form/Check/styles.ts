import type { ColorScheme } from '../../../types'

export const checkboxChecked: Record<ColorScheme, string> = {
  primary: 'peer-checked:bg-primary peer-checked:border-primary',
  secondary: 'peer-checked:bg-secondary peer-checked:border-secondary',
  success: 'peer-checked:bg-success peer-checked:border-success',
  warning: 'peer-checked:bg-warning peer-checked:border-warning',
  danger: 'peer-checked:bg-danger peer-checked:border-danger',
  info: 'peer-checked:bg-info peer-checked:border-info',
}

export const checkboxFocusRing: Record<ColorScheme, string> = {
  primary: 'peer-focus-visible:ring-primary/30',
  secondary: 'peer-focus-visible:ring-secondary/30',
  success: 'peer-focus-visible:ring-success/30',
  warning: 'peer-focus-visible:ring-warning/30',
  danger: 'peer-focus-visible:ring-danger/30',
  info: 'peer-focus-visible:ring-info/30',
}

export const checkIconColor: Record<ColorScheme, string> = {
  primary: 'text-primary-foreground',
  secondary: 'text-secondary-foreground',
  success: 'text-success-foreground',
  warning: 'text-warning-foreground',
  danger: 'text-danger-foreground',
  info: 'text-info-foreground',
}

export const switchBg: Record<ColorScheme, string> = {
  primary: 'peer-checked:bg-primary',
  secondary: 'peer-checked:bg-secondary',
  success: 'peer-checked:bg-success',
  warning: 'peer-checked:bg-warning',
  danger: 'peer-checked:bg-danger',
  info: 'peer-checked:bg-info',
}

export const switchFocusRing: Record<ColorScheme, string> = {
  primary: 'peer-focus-visible:ring-2 peer-focus-visible:ring-primary/30',
  secondary: 'peer-focus-visible:ring-2 peer-focus-visible:ring-secondary/30',
  success: 'peer-focus-visible:ring-2 peer-focus-visible:ring-success/30',
  warning: 'peer-focus-visible:ring-2 peer-focus-visible:ring-warning/30',
  danger: 'peer-focus-visible:ring-2 peer-focus-visible:ring-danger/30',
  info: 'peer-focus-visible:ring-2 peer-focus-visible:ring-info/30',
}

export function switchTrackClass(colorScheme: ColorScheme, error?: string) {
  return [
    'h-6 w-10 rounded-full bg-muted transition-colors',
    switchBg[colorScheme],
    error ? 'peer-focus-visible:ring-2 peer-focus-visible:ring-danger/30' : switchFocusRing[colorScheme],
    'after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-background after:shadow-sm after:transition-all peer-checked:after:translate-x-4',
  ].join(' ')
}

export function checkboxBoxClass(colorScheme: ColorScheme, error?: string) {
  return [
    'flex h-4 w-4 items-center justify-center rounded',
    error ? 'border border-danger peer-hover:border-danger' : 'border border-border peer-hover:border-foreground/30',
    'bg-card transition-all',
    'peer-disabled:opacity-60',
    'peer-focus-visible:ring-2',
    error ? 'peer-focus-visible:ring-danger/30' : checkboxFocusRing[colorScheme],
    checkboxChecked[colorScheme],
  ].join(' ')
}

export function checkIconClass(colorScheme: ColorScheme) {
  return [
    'pointer-events-none absolute inset-0 h-4 w-4 p-0.5',
    'opacity-0 transition-opacity peer-checked:opacity-100',
    checkIconColor[colorScheme],
  ].join(' ')
}