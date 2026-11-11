import { useCallback, isValidElement, type ReactNode, type MouseEvent } from 'react'
import { type ToastEntry, type ToastAction, dismissToast } from './toast-store'
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

const toastBaseClass = 'relative flex items-center gap-3 overflow-hidden rounded-xl border-none p-3.5 text-sm shadow-lg'

function toastClass(variant: string, hasActions: boolean) {
  const pr = hasActions ? '' : 'pr-10 '
  return toastBaseClass + ' ' + pr + (toastStyles[variant] ?? '') + ' animate-[rhf-toastIn_300ms_ease-out]'
}

function progressClass(variant: string) {
  return 'absolute bottom-0 left-0 h-0.75 ' + (progressStyles[variant] ?? '') + ' animate-[rhf-toastProgress_var(--duration)_linear]'
}

function isToastAction(action: ToastAction | ReactNode): action is ToastAction {
  return typeof action === 'object' && action !== null && 'label' in action
}

type ToastItemProps = ToastEntry & {
  defaultAutoClose?: boolean
}

function ActionButton({
  action,
  toastId,
  isCancel = false,
}: {
  action: ToastAction
  toastId: string
  isCancel?: boolean
}) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    action.onClick?.(e, toastId)
    if (action.autoDismiss !== false && !e.defaultPrevented) {
      dismissToast(toastId)
    }
  }

  const baseStyle = isCancel
    ? 'text-current/80 hover:text-current hover:bg-current/10 active:bg-current/20'
    : 'bg-current/15 hover:bg-current/25 active:bg-current/30 text-current border border-current/20 font-semibold shadow-xs'

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`cursor-pointer rounded-md px-2.5 py-1 text-xs transition-colors shrink-0 ${baseStyle} ${action.className ?? ''}`.trim()}
    >
      {action.label}
    </button>
  )
}

function renderActionNode(actionNode: ToastAction | ReactNode, toastId: string, isCancel = false) {
  if (isValidElement(actionNode)) {
    return actionNode
  }
  if (isToastAction(actionNode)) {
    return <ActionButton action={actionNode} toastId={toastId} isCancel={isCancel} />
  }
  return null
}

export function ToastItem({
  id,
  message,
  variant,
  duration,
  persistent,
  action,
  cancel,
  showIcon,
  defaultAutoClose = true,
}: ToastItemProps) {
  const handleDismiss = useCallback(() => dismissToast(id), [id])

  const isPersistent = persistent === true || (persistent === undefined && defaultAutoClose === false) || duration === 0
  const hasActions = Boolean(action || cancel)
  const shouldShowIcon = showIcon ?? !hasActions

  return (
    <div
      role="alert"
      className={toastClass(variant, hasActions)}
    >
      {shouldShowIcon && (iconMap[variant] ?? null)}
      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <div className="leading-snug">{message}</div>
        {hasActions && (
          <div className="ml-auto flex shrink-0 items-center gap-1.5">
            {action && renderActionNode(action, id, false)}
            {cancel && renderActionNode(cancel, id, true)}
          </div>
        )}
      </div>
      {!hasActions && (
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-2.5 top-3 rounded p-0.5 opacity-60 transition-opacity hover:opacity-100"
          aria-label="Cerrar"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      )}
      {!isPersistent && (
        <span
          className={progressClass(variant)}
          style={{ '--duration': `${duration}ms` } as React.CSSProperties}
          onAnimationEnd={handleDismiss}
        />
      )}
    </div>
  )
}
