import { cn } from './helpers'
import { CheckIcon } from '../../lib/Icons'
import type { ColorScheme } from '../../lib/types'

type SelectionCellProps = {
  mode: 'checkbox' | 'radio'
  isSelected: boolean
  colorScheme: ColorScheme
}

const checkboxCls: Record<ColorScheme, string> = {
  primary: 'border-primary bg-primary text-primary-foreground',
  secondary: 'border-secondary bg-secondary text-secondary-foreground',
  success: 'border-success bg-success text-success-foreground',
  warning: 'border-warning bg-warning text-warning-foreground',
  danger: 'border-danger bg-danger text-danger-foreground',
  info: 'border-info bg-info text-info-foreground',
}

const radioCls: Record<ColorScheme, string> = {
  primary: 'border-primary bg-primary',
  secondary: 'border-secondary bg-secondary',
  success: 'border-success bg-success',
  warning: 'border-warning bg-warning',
  danger: 'border-danger bg-danger',
  info: 'border-info bg-info',
}

const radioDot: Record<ColorScheme, string> = {
  primary: 'bg-primary-foreground',
  secondary: 'bg-secondary-foreground',
  success: 'bg-success-foreground',
  warning: 'bg-warning-foreground',
  danger: 'bg-danger-foreground',
  info: 'bg-info-foreground',
}

export function SelectionCell({ mode, isSelected, colorScheme }: SelectionCellProps) {
  if (mode === 'checkbox') {
    return (
      <span
        className={cn(
          'mx-auto flex h-4 w-4 items-center justify-center rounded border transition-colors',
          isSelected
            ? checkboxCls[colorScheme]
            : 'border-muted-foreground/40',
        )}
      >
        {isSelected && <CheckIcon className="h-3.5 w-3.5" />}
      </span>
    )
  }

  return (
    <span
      className={cn(
        'mx-auto flex h-4 w-4 items-center justify-center rounded-full border transition-colors',
        isSelected
          ? radioCls[colorScheme]
          : 'border-muted-foreground/40',
      )}
    >
      {isSelected && <span className={'h-1.5 w-1.5 rounded-full ' + radioDot[colorScheme]} />}
    </span>
  )
}
