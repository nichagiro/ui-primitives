import { useState } from 'react'
import type { ReactNode } from 'react'
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon, CloseIcon } from '../../../lib/Icons'
import { alertClass, dismissButtonClass } from './styles'
import type { AlertVariant, AlertProps } from './types'

const iconMap: Record<AlertVariant, ReactNode> = {
  info: <InfoIcon className="h-5 w-5 shrink-0" />,
  success: <SuccessIcon className="h-5 w-5 shrink-0" />,
  warning: <WarningIcon className="h-5 w-5 shrink-0" />,
  error: <ErrorIcon className="h-5 w-5 shrink-0" />,
}

export function Alert({ variant = 'info', title, children, dismissible, className }: AlertProps) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div role="alert" className={alertClass(variant, className)}>
      {iconMap[variant]}
      <div className="min-w-0 flex-1">
        {title && <p className="font-medium">{title}</p>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className={dismissButtonClass}
          aria-label="Cerrar"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
