import type { ColorScheme } from '../../lib/types'

export type ToastEntry = {
  id: string
  message: string
  variant: ColorScheme
  duration: number
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

export const toast = {
  success: (message: string, duration?: number) => addToast({ message, variant: 'success', duration: duration ?? 4000 }),
  error: (message: string, duration?: number) => addToast({ message, variant: 'danger', duration: duration ?? 5000 }),
  info: (message: string, duration?: number) => addToast({ message, variant: 'info', duration: duration ?? 4000 }),
  warning: (message: string, duration?: number) => addToast({ message, variant: 'warning', duration: duration ?? 4000 }),
  dismiss: (id: string) => dismissToast(id),
}
