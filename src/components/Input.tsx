import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import { FieldWrapper } from './FieldWrapper'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  required?: boolean
  error?: string
}

const baseClass = [
  'block w-full bg-transparent text-sm text-foreground outline-none',
  'placeholder:text-muted-foreground',
  'disabled:cursor-not-allowed',
  'pb-2',
].join(' ')

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, required, error, ...props }, ref) => {
    const generatedId = useId()
    const inputId = props.id || generatedId

    return (
      <FieldWrapper label={label} required={required} error={error} htmlFor={inputId}>
        <input
          ref={ref}
          id={inputId}
          className={className ? baseClass + ' ' + className : baseClass}
          {...props}
        />
      </FieldWrapper>
    )
  },
)
Input.displayName = 'Input'
