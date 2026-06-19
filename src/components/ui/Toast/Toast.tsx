import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { type ToastEntry, getToasts, subscribe } from './toast-store'
import { ToastItem } from './ToastItem'

const KEYFRAMES_ID = 'rhf-toast-keyframes'

function injectKeyframes() {
  if (document.getElementById(KEYFRAMES_ID)) return
  const style = document.createElement('style')
  style.id = KEYFRAMES_ID
  style.textContent = `
    @keyframes rhf-toastIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes rhf-toastProgress {
      from { width: 100%; }
      to { width: 0%; }
    }
  `
  document.head.appendChild(style)
}

export function Toaster({ maxVisible = 5 }: { maxVisible?: number }) {
  const [toastList, setToastList] = useState<ToastEntry[]>([])

  useEffect(() => {
    injectKeyframes()
    return subscribe(() => setToastList([...getToasts()]))
  }, [])

  return createPortal(
    <div className="fixed right-4 top-4 z-100 flex w-80 flex-col gap-2 sm:w-96">
      {toastList.slice(0, maxVisible).map((t) => (
        <ToastItem key={t.id} {...t} />
      ))}
    </div>,
    document.body,
  )
}
