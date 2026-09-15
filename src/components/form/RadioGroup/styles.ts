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