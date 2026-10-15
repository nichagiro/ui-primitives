import { tablistStyles, tabClass, panelStyles } from './styles'
import { useTabs } from './useTabs'
import type { TabsProps } from './types'

export function Tabs({ defaultValue, value, onChange, variant = 'underline', colorScheme = 'primary', tabs, keepMounted = false, className }: TabsProps) {
  const { activeTab, tabRefs, handleSelect, handleKeyDown } = useTabs({ tabs, value, defaultValue, onChange })

  const renderedTabs = keepMounted
    ? tabs.filter(t => !t.disabled)
    : tabs.filter(t => t.value === activeTab)

  return (
    <div className={className ?? ''}>
      <div
        role="tablist"
        className={tablistStyles[variant]}
      >
        {tabs.map((tab, i) => {
          const isActive = tab.value === activeTab

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
              className={tabClass(variant, colorScheme, isActive, tab.disabled)}
              onClick={() => handleSelect(tab.value)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      {renderedTabs.map((tab) => {
        const isActive = tab.value === activeTab
        return (
          <div
            key={tab.value}
            role="tabpanel"
            id={`panel-${tab.value}`}
            aria-labelledby={`tab-${tab.value}`}
            hidden={!isActive}
            className={panelStyles[variant]}
          >
            {tab.content}
          </div>
        )
      })}
    </div>
  )
}
