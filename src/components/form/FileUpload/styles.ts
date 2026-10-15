import type { ColorScheme } from '../../../types'

export const dragBorder: Record<ColorScheme, string> = {
  primary: 'border-primary bg-primary/5',
  secondary: 'border-secondary bg-secondary/5',
  success: 'border-success bg-success/5',
  warning: 'border-warning bg-warning/5',
  danger: 'border-danger bg-danger/5',
  info: 'border-info bg-info/5',
}

export function dropzoneClass(colorScheme: ColorScheme, dragging: boolean, disabled?: boolean) {
  return [
    'relative flex w-full flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed px-4 py-6 text-center transition-colors',
    disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
    dragging ? dragBorder[colorScheme] : 'border-border hover:border-muted-foreground',
  ].join(' ')
}