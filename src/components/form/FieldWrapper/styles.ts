import type { ColorScheme } from '../../../types'

export const focusRing: Record<ColorScheme, string> = {
  primary: 'focus-within:border-primary focus-within:ring-primary/30',
  secondary: 'focus-within:border-secondary focus-within:ring-secondary/30',
  success: 'focus-within:border-success focus-within:ring-success/30',
  warning: 'focus-within:border-warning focus-within:ring-warning/30',
  danger: 'focus-within:border-danger focus-within:ring-danger/30',
  info: 'focus-within:border-info focus-within:ring-info/30',
}

export const labelColor: Record<ColorScheme, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
}

export const containerCls = [
  'rounded-lg border border-border bg-card shadow-sm transition-all duration-200',
  'has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60',
  'focus-within:shadow-md focus-within:ring-2',
].join(' ')