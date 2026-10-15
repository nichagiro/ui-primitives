import { CloseIcon } from '../../../lib/Icons'
import { chipClass, dismissButtonClass } from './styles'
import type { ChipProps } from './types'

export function Chip({ variant = 'default', size = 'md', children, onDismiss, className }: ChipProps) {
  return (
    <span className={chipClass(variant, size, className)}>
      {children}
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className={dismissButtonClass}
          aria-label="Eliminar"
        >
          <CloseIcon className="h-3 w-3" />
        </button>
      )}
    </span>
  )
}
