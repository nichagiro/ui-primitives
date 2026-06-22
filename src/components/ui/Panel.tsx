import { useState, type ReactNode } from 'react'
import type { ColorScheme } from '../../types'
import { ChevronDown } from '../../lib/Icons'

export type PanelProps = {
  colorScheme?: ColorScheme
  title?: string
  children: ReactNode
  className?: string
}

const headerBg: Record<ColorScheme, string> = {
  primary: 'bg-primary/10',
  secondary: 'bg-secondary/10',
  success: 'bg-success/10',
  warning: 'bg-warning/10',
  danger: 'bg-danger/10',
  info: 'bg-info/10',
}

const headerText: Record<ColorScheme, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
}

export function Panel({ colorScheme, title, children, className }: PanelProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={['rounded-lg border border-border bg-card shadow-sm overflow-hidden', className ?? ''].join(' ')}>
      {title && (
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className={[
            'flex w-full items-center justify-between px-4 pt-3 pb-2 text-sm font-medium text-left',
            colorScheme ? headerBg[colorScheme] + ' ' + headerText[colorScheme] : 'text-foreground',
          ].join(' ')}
        >
          {title}
          <ChevronDown className={['h-4 w-4 shrink-0 transition-transform duration-200', collapsed ? '-rotate-90' : ''].join(' ')} />
        </button>
      )}
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
