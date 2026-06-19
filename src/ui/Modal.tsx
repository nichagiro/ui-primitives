import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from '../lib/Icons'
import type { ColorScheme } from '../lib/types'

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export type ModalProps = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  footer?: ReactNode
  size?: ModalSize
  colorScheme?: ColorScheme
  className?: string
}

const sizeStyles: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-[calc(100vw-2rem)]',
}

const headerStyles: Record<ColorScheme, string> = {
  primary: 'bg-primary text-primary-foreground rounded-t-xl',
  secondary: 'bg-secondary text-secondary-foreground rounded-t-xl',
  success: 'bg-success text-success-foreground rounded-t-xl',
  warning: 'bg-warning text-warning-foreground rounded-t-xl',
  danger: 'bg-danger text-danger-foreground rounded-t-xl',
  info: 'bg-info text-info-foreground rounded-t-xl',
}

const closeBtnStyles: Record<ColorScheme, string> = {
  primary: 'text-primary-foreground/70 hover:bg-primary-foreground/10',
  secondary: 'text-secondary-foreground/70 hover:bg-secondary-foreground/10',
  success: 'text-success-foreground/70 hover:bg-success-foreground/10',
  warning: 'text-warning-foreground/70 hover:bg-warning-foreground/10',
  danger: 'text-danger-foreground/70 hover:bg-danger-foreground/10',
  info: 'text-info-foreground/70 hover:bg-info-foreground/10',
}

const KEYFRAMES_ID = 'rhf-modal-keyframes'

function injectKeyframes() {
  if (document.getElementById(KEYFRAMES_ID)) return
  const style = document.createElement('style')
  style.id = KEYFRAMES_ID
  style.textContent = `
    @keyframes rhf-fadeIn { from { opacity: 0 } to { opacity: 1 } }
    @keyframes rhf-scaleIn { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }
  `
  document.head.appendChild(style)
}

function ModalContent({ title, children, footer, size, colorScheme, className, onClose }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    injectKeyframes()
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4 backdrop-blur-sm animate-[rhf-fadeIn_150ms_ease-out]"
      onClick={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={[
          'flex max-h-[85vh] w-full flex-col rounded-xl border border-border bg-card shadow-2xl animate-[rhf-scaleIn_200ms_ease-out]',
          sizeStyles[size ?? 'md'],
          className ?? '',
        ].join(' ')}
      >
        {title && (
          <div className={'flex items-center justify-between px-6 py-4 ' + (colorScheme ? headerStyles[colorScheme] : 'border-b border-border')}>
            <h2 className={'text-base font-semibold ' + (colorScheme ? '' : 'text-foreground')}>{title}</h2>
            <button
              type="button"
              onClick={onClose}
              className={'rounded-lg p-1.5 transition-colors ' + (colorScheme ? closeBtnStyles[colorScheme] : 'text-muted-foreground hover:bg-muted hover:text-foreground')}
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
      </div>
    </div>
  )
}

export function Modal(props: ModalProps) {
  if (!props.open) return null
  return createPortal(<ModalContent {...props} />, document.body)
}
