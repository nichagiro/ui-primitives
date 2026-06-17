import { forwardRef, useId, type InputHTMLAttributes } from 'react'

export type CheckProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  variant?: 'checkbox' | 'switch'
}

export const Check = forwardRef<HTMLInputElement, CheckProps>(
  ({ className, label, error, variant = 'checkbox', ...props }, ref) => {
    const generatedId = useId()
    const checkId = props.id || generatedId

    if (variant === 'switch') {
      return (
        <div className={className}>
          <label htmlFor={checkId} className="inline-flex cursor-pointer items-center gap-3">
            <div className="relative">
              <input
                ref={ref}
                type="checkbox"
                id={checkId}
                className="peer sr-only"
                {...props}
              />
              <div className="h-6 w-10 rounded-full bg-muted transition-colors peer-checked:bg-primary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-background after:shadow-sm after:transition-all peer-checked:after:translate-x-4" />
            </div>
            <span className="text-sm text-foreground select-none">{label}</span>
          </label>
          {error && (
            <p className="mt-1 ps-1.5 text-xs text-danger" role="alert">
              {error}
            </p>
          )}
        </div>
      )
    }

    return (
      <div>
        <label
          htmlFor={checkId}
          className="flex cursor-pointer items-center gap-2 text-sm text-foreground"
        >
          <input
            ref={ref}
            type="checkbox"
            id={checkId}
            className={'h-4 w-4 accent-primary' + (className ? ' ' + className : '')}
            {...props}
          />
          {label}
        </label>
        {error && (
          <p className="mt-1 ps-1.5 text-xs text-danger" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)
Check.displayName = 'Check'
