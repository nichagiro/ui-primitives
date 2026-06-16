import { forwardRef, useId, type InputHTMLAttributes } from 'react'

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, error, ...props }, ref) => {
    const generatedId = useId()
    const radioId = props.id || generatedId

    return (
      <div>
        <label
          htmlFor={radioId}
          className="flex cursor-pointer items-center gap-2 text-sm text-foreground"
        >
          <input
            ref={ref}
            type="radio"
            id={radioId}
            className={'h-4 w-4 accent-primary' + (className ? ' ' + className : '')}
            {...props}
          />
          {label}
        </label>
        {error && (
          <p className="mt-1 ps-1.5 text-xs text-destructive" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)
Radio.displayName = 'Radio'
