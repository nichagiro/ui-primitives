import { useState, useCallback, useRef } from 'react'
import type { TabsItem } from './types'

type UseTabsParams = {
  tabs: TabsItem[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export function useTabs({ tabs, value, defaultValue, onChange }: UseTabsParams) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? tabs[0]?.value ?? '')
  const activeTab = isControlled ? value : internalValue
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const enabledIndices = tabs.map((t, i) => t.disabled ? -1 : i).filter(i => i !== -1)

  const handleSelect = useCallback((tabValue: string) => {
    if (!isControlled) setInternalValue(tabValue)
    onChange?.(tabValue)
  }, [isControlled, onChange])

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex: number | null = null

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault()
        nextIndex = enabledIndices[(enabledIndices.indexOf(currentIndex) + 1) % enabledIndices.length]
        break
      case 'ArrowLeft':
        e.preventDefault()
        nextIndex = enabledIndices[(enabledIndices.indexOf(currentIndex) - 1 + enabledIndices.length) % enabledIndices.length]
        break
      case 'Home':
        e.preventDefault()
        nextIndex = enabledIndices[0]
        break
      case 'End':
        e.preventDefault()
        nextIndex = enabledIndices[enabledIndices.length - 1]
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        handleSelect(tabs[currentIndex].value)
        break
    }

    if (nextIndex !== null) {
      tabRefs.current[nextIndex]?.focus()
      handleSelect(tabs[nextIndex].value)
    }
  }

  return { activeTab, tabRefs, handleSelect, handleKeyDown }
}
