import { useState, useCallback, useRef, type ReactNode } from 'react'
import { build } from '../../lib/colorSchemes'
import type { ColorScheme } from '../../types'

export type TabsVariant = 'underline' | 'pill' | 'cards'

export type TabsItem = {
  value: string
  label: ReactNode
  content: ReactNode
  disabled?: boolean
}

export type TabsProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  variant?: TabsVariant
  colorScheme?: ColorScheme
  tabs: TabsItem[]
  className?: string
}

const tablistStyles: Record<TabsVariant, string> = {
  underline: 'flex border-b border-border',
  pill: 'flex gap-1 p-1 bg-muted rounded-lg',
  cards: 'flex gap-0',
}

const activeTabStyles: Record<TabsVariant, Record<ColorScheme, string>> = {
  underline: build((s) => `text-${s} border-${s}`),
  pill: build((s) => `bg-${s} text-${s}-foreground shadow-sm rounded-md`),
  cards: build((s) => `bg-card text-${s} border border-border border-b-card -mb-px rounded-t-lg`),
}

const inactiveTabBase: Record<TabsVariant, string> = {
  underline: 'text-muted-foreground hover:text-foreground border-transparent',
  pill: 'text-muted-foreground hover:text-foreground rounded-md',
  cards: 'text-muted-foreground hover:text-foreground bg-muted/50 border border-transparent rounded-t-lg',
}

const tabPadding: Record<TabsVariant, string> = {
  underline: 'px-4 py-2',
  pill: 'px-4 py-1.5',
  cards: 'px-4 py-2',
}

const panelStyles: Record<TabsVariant, string> = {
  underline: 'py-4 text-sm text-foreground',
  pill: 'py-4 text-sm text-foreground',
  cards: 'relative -mt-px border border-border rounded-b-lg rounded-tr-lg p-4 text-sm text-foreground',
}

export function Tabs({ defaultValue, value, onChange, variant = 'underline', colorScheme = 'primary', tabs, className }: TabsProps) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? tabs[0]?.value ?? '')
  const activeTab = isControlled ? value : internalValue
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const enabledIndices = tabs.map((t, i) => t.disabled ? -1 : i).filter(i => i !== -1)

  const handleSelect = useCallback((tabValue: string) => {
    if (isControlled) {
      onChange?.(tabValue)
    } else {
      setInternalValue(tabValue)
      onChange?.(tabValue)
    }
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

  const activeContent = tabs.find(t => t.value === activeTab)?.content

  return (
    <div className={className ?? ''}>
      <div
        role="tablist"
        className={tablistStyles[variant]}
      >
        {tabs.map((tab, i) => {
          const isActive = tab.value === activeTab
          const cls = [
            'font-medium cursor-pointer transition-colors',
            tabPadding[variant],
            isActive
              ? activeTabStyles[variant][colorScheme]
              : inactiveTabBase[variant],
            variant === 'underline' ? 'border-b-2 -mb-px' : '',
            tab.disabled ? 'opacity-50 cursor-not-allowed' : '',
          ].join(' ')

          return (
            <button
              key={tab.value}
              ref={(el) => { tabRefs.current[i] = el }}
              type="button"
              role="tab"
              id={`tab-${tab.value}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.value}`}
              tabIndex={isActive ? 0 : -1}
              disabled={tab.disabled}
              className={cls}
              onClick={() => handleSelect(tab.value)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      {activeContent && (
        <div
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className={panelStyles[variant]}
        >
          {activeContent}
        </div>
      )}
    </div>
  )
}
