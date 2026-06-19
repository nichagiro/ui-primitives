import { useCallback, type ReactNode } from 'react'
import { type ToastEntry, dismissToast } from './toast-store'
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon, CloseIcon } from '../../lib/Icons'

const iconMap: Record<string, ReactNode> = {
  info: <InfoIcon className="h-5 w-5 shrink-0" />,
  success: <SuccessIcon className="h-5 w-5 shrink-0" />,
  warning: <WarningIcon className="h-5 w-5 shrink-0" />,
  danger: <ErrorIcon className="h-5 w-5 shrink-0" />,
}

const toastStyles: Record<string, string> = {
  info: 'border-info/30 bg-info/10 text-info',
  success: 'border-success/30 bg-success/10 text-success',
  warning: 'border-warning/30 bg-warning/10 text-warning',
  danger: 'border-danger/30 bg-danger/10 text-danger',
}

const progressStyles: Record<string, string> = {
  info: 'bg-info',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
}

type ToastItemProps = ToastEntry

export function ToastItem({ id, message, variant, duration }: ToastItemProps) {
  const handleDismiss = useCallback(() => dismissToast(id), [id])

  return (
    <div
      role="alert"
      className={[
        'relative flex items-start gap-3 overflow-hidden rounded-xl border bg-card p-4 pr-11 text-sm shadow-lg',
        toastStyles[variant] ?? '',
        'animate-[rhf-toastIn_300ms_ease-out]',
      ].join(' ')}
    >
      {iconMap[variant] ?? null}
      <p className="flex-1 pt-0.5 text-foreground">{message}</p>
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-3 top-3 rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Cerrar"
      >
        <CloseIcon className="h-4 w-4" />
      </button>
      <span
        className={['absolute bottom-0 left-0 h-0.75', progressStyles[variant] ?? '', 'animate-[rhf-toastProgress_var(--duration)_linear]'].join(' ')}
        style={{ '--duration': `${duration}ms` } as React.CSSProperties}
        onAnimationEnd={handleDismiss}
      />
    </div>
  )
}
