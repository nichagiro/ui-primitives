import type { ReactNode } from 'react'

export type PanelVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger'

export type PanelProps = {
  variant?: PanelVariant
  title?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
}

const borderStyles: Record<PanelVariant, string> = {
  default: 'border-border',
  primary: 'border-primary',
  success: 'border-success',
  warning: 'border-warning',
  danger:   'border-danger',
}

const headerStyles: Record<PanelVariant, string> = {
  default: 'text-foreground',
  primary: 'text-primary',
  success: 'text-success',
  warning: 'text-warning',
  danger:   'text-danger',
}

export function Panel({ variant = 'default', title, children, footer, className }: PanelProps) {
  return (
    <div className={['rounded-lg border bg-card shadow-sm', borderStyles[variant], className ?? ''].join(' ')}>
      {title && (
        <div className={'px-4 pt-3 pb-2 text-sm font-medium ' + headerStyles[variant]}>
          {title}
        </div>
      )}
      <div className="px-4 py-3">{children}</div>
      {footer && (
        <div className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
          {footer}
        </div>
      )}
    </div>
  )
}
