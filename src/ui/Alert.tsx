import { useState, type ReactNode } from 'react'
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon, CloseIcon } from '../lib/Icons'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

export type AlertProps = {
  variant?: AlertVariant
  title?: string
  children: ReactNode
  dismissible?: boolean
  className?: string
}

const iconMap: Record<AlertVariant, ReactNode> = {
  info: <InfoIcon className="h-5 w-5 shrink-0" />,
  success: <SuccessIcon className="h-5 w-5 shrink-0" />,
  warning: <WarningIcon className="h-5 w-5 shrink-0" />,
  error: <ErrorIcon className="h-5 w-5 shrink-0" />,
}

const variantStyles: Record<AlertVariant, string> = {
  info:    'border-info bg-info/10 text-info',
  success: 'border-success bg-success/10 text-success',
  warning: 'border-warning bg-warning/10 text-warning',
  error:   'border-danger bg-danger/10 text-danger',
}

export function Alert({ variant = 'info', title, children, dismissible, className }: AlertProps) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div
      role="alert"
      className={[
        'flex items-start gap-3 rounded-md border px-4 py-3 text-sm',
        variantStyles[variant],
        className ?? '',
      ].join(' ')}
    >
      {iconMap[variant]}
      <div className="min-w-0 flex-1">
        {title && <p className="font-medium">{title}</p>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="shrink-0 rounded p-1 opacity-60 transition-opacity hover:opacity-100"
          aria-label="Cerrar"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
