import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from '../../lib/Icons'

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export type ModalProps = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  footer?: ReactNode
  size?: ModalSize
  className?: string
}

const sizeStyles: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-[calc(100vw-2rem)]',
}

const STYLE_ID = 'rhf-modal-styles'

function injectStyles() {
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

export function Modal({ open, onClose, title, children, footer, size = 'md', className }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const onCloseRef = useRef(onClose)
  useEffect(() => { onCloseRef.current = onClose }, [onClose])

  useEffect(() => { injectStyles() }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      if (!dialog.open) dialog.showModal()
    } else {
      if (dialog.open) dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => onCloseRef.current()
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [])

  if (!open) return null

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label={title ?? 'Diálogo'}
      className={[
        'flex fixed m-auto inset-0 max-h-[85vh] w-full flex-col rounded-xl border border-border bg-card shadow-2xl',
        'p-0 backdrop:bg-overlay/50 backdrop:backdrop-blur-sm',
        sizeStyles[size],
        className ?? '',
      ].join(' ')}
    >
      {title && (
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-base font-semibold text-foreground">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Cerrar"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
      )}
      <div className="overflow-y-auto px-6 py-4 text-sm leading-relaxed text-foreground">
        {children}
      </div>
      {footer && (
        <div className="flex items-center justify-end gap-3 px-6 pb-4 pt-0">
          {footer}
        </div>
      )}
    </dialog>,
    document.body,
  )
}
