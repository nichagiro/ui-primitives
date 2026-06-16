import type { Ref, MutableRefObject } from 'react'

export function assignRef<T>(ref: Ref<T> | null | undefined, node: T | null) {
  if (typeof ref === 'function') {
    ref(node)
  } else if (ref && 'current' in ref) {
    (ref as MutableRefObject<T | null>).current = node
  }
}
