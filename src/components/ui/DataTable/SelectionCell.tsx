import { CheckIcon } from '../../../lib/Icons'

import type { ColorScheme } from '../../../types'
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

const checkboxCellBase = 'mx-auto flex h-4 w-4 items-center justify-center rounded border transition-colors'
const radioCellBase = 'mx-auto flex h-4 w-4 items-center justify-center rounded-full border transition-colors'
const unselectedBorder = 'border-muted-foreground/40'

function checkboxCellClass(isSelected: boolean, colorScheme: ColorScheme) {
  return checkboxCellBase + ' ' + (isSelected ? checkboxCls[colorScheme] : unselectedBorder)
}

function radioCellClass(isSelected: boolean, colorScheme: ColorScheme) {
  return radioCellBase + ' ' + (isSelected ? radioCls[colorScheme] : unselectedBorder)
}

function radioDotClass(colorScheme: ColorScheme) {
  return 'h-1.5 w-1.5 rounded-full ' + radioDot[colorScheme]
}

export function SelectionCell({ mode, isSelected, colorScheme }: SelectionCellProps) {
  if (mode === 'checkbox') {
    return (
      <span
        className={checkboxCellClass(isSelected, colorScheme)}
      >
        {isSelected && <CheckIcon className="h-3.5 w-3.5" />}
      </span>
    )
  }

  return (
    <span
      className={radioCellClass(isSelected, colorScheme)}
    >
      {isSelected && <span className={radioDotClass(colorScheme)} />}
    </span>
  )
}
