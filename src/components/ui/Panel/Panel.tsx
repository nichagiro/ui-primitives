import { useState } from 'react'
import { ChevronDown } from '../../../lib/Icons'
import { panelClass, headerClass, chevronClass, bodyClass, bodyClipClass, bodyContentClass } from './styles'
import type { PanelProps } from './types'

export function Panel({ colorScheme, variant = 'solid', title, children, className }: PanelProps) {
  const [collapsed, setCollapsed] = useState(false)
  const isSolid = colorScheme && variant === 'solid'

  return (
    <div className={panelClass(className)}>
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className={headerClass(colorScheme, isSolid)}
      >
        <span>{title}</span>
        <ChevronDown className={chevronClass(collapsed)} />
      </button>
      <div className={bodyClass(collapsed)}>
        <div className={bodyClipClass}>
          <div className={bodyContentClass}>{children}</div>
        </div>
      </div>
    </div>
  )
}
