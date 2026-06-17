import { cn } from './helpers'
import { CheckIcon } from '../../lib/Icons'

type SelectionCellProps = {
  mode: 'checkbox' | 'radio'
  isSelected: boolean
}

export function SelectionCell({ mode, isSelected }: SelectionCellProps) {
  if (mode === 'checkbox') {
    return (
      <span
        className={cn(
          'mx-auto flex h-4 w-4 items-center justify-center rounded border transition-colors',
          isSelected
            ? 'border-primary bg-primary text-primary-foreground'
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
          ? 'border-primary bg-primary'
          : 'border-muted-foreground/40',
      )}
    >
      {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />}
    </span>
  )
}
