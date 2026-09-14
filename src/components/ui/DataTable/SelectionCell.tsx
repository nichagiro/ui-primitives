import { cn } from '../../../lib/cn'
import { CheckIcon } from '../../../lib/Icons'
import { borderSolidColor, borderBgColor, bgColorFg } from '../../../lib/colorSchemes'

import type { ColorScheme } from '../../../types'
type SelectionCellProps = {
  mode: 'checkbox' | 'radio'
  isSelected: boolean
  colorScheme: ColorScheme
}

const checkboxCls = borderSolidColor()
const radioCls = borderBgColor()
const radioDot = bgColorFg()

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
