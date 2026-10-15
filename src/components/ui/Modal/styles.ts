import { cn } from '../../../lib/cn'
import type { ModalSize } from './types'

const sizeStyles: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-[calc(100vw-2rem)]',
}

const modalBaseClass = 'flex fixed m-auto inset-0 max-h-[85vh] w-full flex-col rounded-xl border border-border bg-card shadow-2xl'
const modalBackdropClass = 'p-0 backdrop:bg-overlay/50 backdrop:backdrop-blur-sm'

export function modalClass(size: ModalSize, className?: string) {
  return cn(modalBaseClass, modalBackdropClass, sizeStyles[size], className)
}

export const modalHeaderClass = 'flex items-center justify-between border-b border-border px-6 py-4'
export const modalTitleClass = 'text-base font-semibold text-foreground'
export const modalCloseButtonClass = 'rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
export const modalBodyClass = 'overflow-y-auto px-6 py-4 text-sm leading-relaxed text-foreground'
export const modalFooterClass = 'flex items-center justify-end gap-3 px-6 pb-4 pt-0'

const STYLE_ID = 'rhf-modal-styles'

export function injectStyles() {
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
    dialog[open] { animation: rhf-scaleIn 200ms ease-out; }
    dialog::backdrop {
      background: rgba(0 0 0 / 0.5);
      backdrop-filter: blur(4px);
      animation: rhf-fadeIn 150ms ease-out;
    }
    @keyframes rhf-fadeIn { from { opacity: 0 } to { opacity: 1 } }
    @keyframes rhf-scaleIn { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }
  `
  document.head.appendChild(style)
}
