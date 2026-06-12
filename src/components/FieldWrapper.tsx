import type { ReactNode } from 'react'

interface FieldWrapperProps {
  label: string
  required?: boolean
  error?: string
  htmlFor?: string
  children: ReactNode
}

const containerCls = [
  'rounded-lg border border-border bg-card shadow-sm transition-all duration-200',
  'has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60',
  'focus-within:shadow-md focus-within:ring-2',
]

function FieldWrapper({ label, required, error, htmlFor, children }: FieldWrapperProps) {
  const borderCls = error
    ? 'border-red-400 focus-within:border-red-500 focus-within:ring-red-500/10'
    : 'focus-within:border-primary focus-within:ring-primary/30'

  return (
    <div>
      <div className={containerCls.join(' ') + ' ' + borderCls}>
        <label htmlFor={htmlFor} className="block px-3 pt-2 text-xs font-medium text-primary">
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
        <div className="px-3">{children}</div>
      </div>
      {error && (
        <p className="mt-1 ps-1.5 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export { FieldWrapper }
export type { FieldWrapperProps }
