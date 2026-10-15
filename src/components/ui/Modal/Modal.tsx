import { createPortal } from 'react-dom'
import { CloseIcon } from '../../../lib/Icons'
import {
  modalClass,
  modalHeaderClass,
  modalTitleClass,
  modalCloseButtonClass,
  modalBodyClass,
  modalFooterClass,
} from './styles'
import { useModal } from './useModal'
import type { ModalProps } from './types'

export function Modal({ open, onClose, title, children, footer, size = 'md', persistent = false, className }: ModalProps) {
  const dialogRef = useModal({ open, onClose, persistent })

  if (!open) return null

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label={title ?? 'Diálogo'}
      className={modalClass(size, className)}
    >
      {title && (
        <div className={modalHeaderClass}>
          <h2 className={modalTitleClass}>{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className={modalCloseButtonClass}
            aria-label="Cerrar"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
      )}
      <div className={modalBodyClass}>
        {children}
      </div>
      {footer && (
        <div className={modalFooterClass}>
          {footer}
        </div>
      )}
    </dialog>,
    document.body,
  )
}
