import { useState, type ReactNode } from 'react'
import type { ColorScheme } from '../../types'
import { ChevronDown } from '../../lib/Icons'

export type PanelProps = {
  colorScheme?: ColorScheme
  variant?: 'solid' | 'soft'
  title?: string
  children: ReactNode
  className?: string
}

const headerSolidBg: Record<ColorScheme, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  info: 'bg-info',
}

const headerSolidText: Record<ColorScheme, string> = {
  primary: 'text-primary-foreground',
  secondary: 'text-secondary-foreground',
  success: 'text-success-foreground',
  warning: 'text-warning-foreground',
  danger: 'text-danger-foreground',
  info: 'text-info-foreground',
}

const headerSoftBg: Record<ColorScheme, string> = {
  primary: 'bg-primary/10',
  secondary: 'bg-secondary/10',
  success: 'bg-success/10',
  warning: 'bg-warning/10',
  danger: 'bg-danger/10',
  info: 'bg-info/10',
}

const headerSoftText: Record<ColorScheme, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
}

const borderSolid: Record<ColorScheme, string> = {
  primary: 'border-primary/30',
  secondary: 'border-secondary/30',
  success: 'border-success/30',
  warning: 'border-warning/30',
  danger: 'border-danger/30',
  info: 'border-info/30',
}

export function Panel({ colorScheme, variant = 'solid', title, children, className }: PanelProps) {
  const [collapsed, setCollapsed] = useState(false)
  const isSolid = colorScheme && variant === 'solid'

  const containerBorder = isSolid ? borderSolid[colorScheme!] : 'border-border'

  return (
    <div className={['rounded-lg border bg-card shadow-sm overflow-hidden', containerBorder, className ?? ''].join(' ')}>
      {title && (
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
