import { useCallback, type ReactNode } from 'react'
import { type ToastEntry, dismissToast } from './toast-store'
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon, CloseIcon } from '../../../lib/Icons'

const iconMap: Record<string, ReactNode> = {
  info: <InfoIcon className="h-5 w-5 shrink-0" />,
  success: <SuccessIcon className="h-5 w-5 shrink-0" />,
  warning: <WarningIcon className="h-5 w-5 shrink-0" />,
  danger: <ErrorIcon className="h-5 w-5 shrink-0" />,
}

const toastStyles: Record<string, string> = {
  info: 'bg-info text-info-foreground',
  success: 'bg-success text-success-foreground',
  warning: 'bg-warning text-warning-foreground',
  danger: 'bg-danger text-danger-foreground',
}

const progressStyles: Record<string, string> = {
  info: 'bg-white/40',
  success: 'bg-white/40',
  warning: 'bg-black/20',
  danger: 'bg-white/40',
}

type ToastItemProps = ToastEntry

export function ToastItem({ id, message, variant, duration }: ToastItemProps) {
  const handleDismiss = useCallback(() => dismissToast(id), [id])

  return (
    <div
      role="alert"
      className={[
        'relative flex items-start gap-3 overflow-hidden rounded-xl border-none p-4 pr-11 text-sm shadow-lg',
        toastStyles[variant] ?? '',
        'animate-[rhf-toastIn_300ms_ease-out]',
      ].join(' ')}
    >
      {iconMap[variant] ?? null}
      <p className="flex-1 pt-0.5">{message}</p>
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-3 top-3 rounded p-0.5 opacity-60 transition-opacity hover:opacity-100"
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
