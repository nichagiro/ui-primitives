import { forwardRef, useId, type TextareaHTMLAttributes } from 'react'
import { FieldWrapper } from './FieldWrapper'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  required?: boolean
  error?: string
}

const baseClass = [
  'block w-full bg-transparent text-sm text-foreground outline-none resize-none min-h-[80px]',
  'placeholder:text-muted-foreground',
  'disabled:cursor-not-allowed',
  'pb-2',
].join(' ')

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, required, error, ...props }, ref) => {
    const generatedId = useId()
    const textareaId = props.id || generatedId

    return (
      <FieldWrapper label={label} required={required} error={error} htmlFor={textareaId}>
        <textarea
          ref={ref}
          id={textareaId}
          className={className ? baseClass + ' ' + className : baseClass}
          {...props}
        />
      </FieldWrapper>
    )
  },
)
TextArea.displayName = 'TextArea'
