import { useEffect, useRef } from 'react'
import { injectStyles } from './styles'

type UseModalParams = {
  open: boolean
  onClose: () => void
  persistent: boolean
}

export function useModal({ open, onClose, persistent }: UseModalParams) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const onCloseRef = useRef(onClose)
  useEffect(() => { onCloseRef.current = onClose }, [onClose])

  useEffect(() => { injectStyles() }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !open) return

    dialog.showModal()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (persistent) {
          e.preventDefault()
        } else {
          onCloseRef.current()
        }
      }
    }

    const handleClick = (e: MouseEvent) => {
      if (e.target === dialog && !persistent) {
        onCloseRef.current()
      }
    }

    const handleCancel = (e: Event) => {
      if (persistent) e.preventDefault()
    }

    dialog.addEventListener('keydown', handleKeyDown)
    dialog.addEventListener('click', handleClick)
    dialog.addEventListener('cancel', handleCancel)

    return () => {
      dialog.removeEventListener('keydown', handleKeyDown)
      dialog.removeEventListener('click', handleClick)
      dialog.removeEventListener('cancel', handleCancel)
      if (dialog.open) dialog.close()
    }
  }, [open, persistent])

  return dialogRef
}
