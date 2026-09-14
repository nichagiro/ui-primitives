import { useState, type ReactNode } from 'react'
import type { ColorScheme } from '../../types'
import { ChevronDown } from '../../lib/Icons'
import { bgColor, textColorFg, bgColorAlpha, textColor } from '../../lib/colorSchemes'
import { cn } from '../../lib/cn'

export type PanelProps = {
  colorScheme?: ColorScheme
  variant?: 'solid' | 'soft'
  title?: string
  children: ReactNode
  className?: string
}

const headerSolidBg = bgColor()
const headerSolidText = textColorFg()
const headerSoftBg = bgColorAlpha(10)
const headerSoftText = textColor()

export function Panel({ colorScheme, variant = 'solid', title, children, className }: PanelProps) {
  const [collapsed, setCollapsed] = useState(false)
  const isSolid = colorScheme && variant === 'solid'

  return (
    <div className={cn('rounded-lg border border-border bg-card shadow-sm overflow-hidden', className)}>
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className={[
          'flex w-full items-center justify-between px-4 pt-3 pb-2 text-sm font-medium text-left',
          colorScheme
            ? (isSolid ? headerSolidBg[colorScheme] + ' ' + headerSolidText[colorScheme] : headerSoftBg[colorScheme] + ' ' + headerSoftText[colorScheme])
            : 'text-foreground',
        ].join(' ')}
      >
        <span>{title}</span>
        <ChevronDown className={['h-4 w-4 shrink-0 transition-transform duration-200', collapsed ? '-rotate-90' : ''].join(' ')} />
      </button>
      <div
        className={[
          'grid transition-[grid-template-rows] duration-200',
          collapsed ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]',
        ].join(' ')}
      >
        <div className="overflow-hidden">
          <div className="px-4 py-3">{children}</div>
        </div>
      </div>
    </div>
  )
}
