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