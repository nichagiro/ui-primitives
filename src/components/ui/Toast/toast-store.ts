import type { ReactNode } from 'react'
import type { ColorScheme } from '../../../types'

export type ToastAction = {
  label: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void | boolean | Promise<void>
  autoDismiss?: boolean
  className?: string
}

export type ToastOptions = {
  duration?: number
  persistent?: boolean
  action?: ToastAction | ReactNode
  cancel?: ToastAction | ReactNode
  /** Alias de compatibilidad hacia atrás para cancel */
  secondaryAction?: ToastAction | ReactNode
  /** Opcional: mostrar/ocultar icono. Por defecto false si hay acciones, true si no las hay */
  showIcon?: boolean
}

export type ToastEntry = {
  id: string
  message: ReactNode
  variant: ColorScheme
  duration: number
  persistent?: boolean
  action?: ToastAction | ReactNode
  cancel?: ToastAction | ReactNode
  showIcon?: boolean
}

let toasts: ToastEntry[] = []
let listeners: Array<() => void> = []
let toastIdCounter = 0

export function getToasts() { return toasts }

function addToast(entry: Omit<ToastEntry, 'id'>): string {
  const id = `toast-${++toastIdCounter}`
  toasts = [...toasts, { ...entry, id }]
  listeners.forEach(fn => fn())
  return id
}

export function dismissToast(id: string) {
  toasts = toasts.filter(t => t.id !== id)
  listeners.forEach(fn => fn())
}

export function subscribe(fn: () => void) {
  listeners.push(fn)
  return () => { listeners = listeners.filter(l => l !== fn) }
}

function resolveOptions(defaultDuration: number, durationOrOptions?: number | ToastOptions) {
  if (typeof durationOrOptions === 'number') {
    return {
      duration: durationOrOptions,
      persistent: durationOrOptions === 0 || durationOrOptions === Infinity,
      showIcon: true,
    }
  }

  const {
    duration,
    persistent,
    action,
    cancel,
    secondaryAction,
    showIcon,
  } = durationOrOptions ?? {}

  const resolvedCancel = cancel ?? secondaryAction
  const hasActions = Boolean(action || resolvedCancel)

  // Si tiene acciones y no se especificó persistent: false ni duración, es automáticamente persistente (true)
  const isPersistent = persistent ?? (hasActions ? (duration === undefined ? true : undefined) : (duration === 0 || duration === Infinity ? true : undefined))

  return {
    duration: isPersistent ? 0 : (duration ?? defaultDuration),
    persistent: isPersistent,
    action,
    cancel: resolvedCancel,
    showIcon: showIcon ?? !hasActions,
  }
}

export const toast = {
  success: (message: ReactNode, options?: number | ToastOptions) =>
    addToast({ message, variant: 'success', ...resolveOptions(4000, options) }),
  error: (message: ReactNode, options?: number | ToastOptions) =>
    addToast({ message, variant: 'danger', ...resolveOptions(5000, options) }),
  info: (message: ReactNode, options?: number | ToastOptions) =>
    addToast({ message, variant: 'info', ...resolveOptions(4000, options) }),
  warning: (message: ReactNode, options?: number | ToastOptions) =>
    addToast({ message, variant: 'warning', ...resolveOptions(4000, options) }),
  dismiss: (id: string) => dismissToast(id),
}
