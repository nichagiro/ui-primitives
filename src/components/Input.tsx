import { forwardRef, type InputHTMLAttributes } from 'react'
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
].join(' ')

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, required, error, ...props }, ref) => {
    return (
      <FieldWrapper label={label} required={required} error={error}>
        <input
          ref={ref}
          className={className ? baseClass + ' ' + className : baseClass}
          {...props}
        />
      </FieldWrapper>
    )
  },
)
Input.displayName = 'Input'
