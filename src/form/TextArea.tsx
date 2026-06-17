import { forwardRef, useId, type TextareaHTMLAttributes } from 'react'
import { FieldWrapper } from './FieldWrapper'
import type { ColorScheme } from '../lib/types'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  required?: boolean
  error?: string
  colorScheme?: ColorScheme
}

const baseClass = [
  'block w-full bg-transparent text-sm text-foreground outline-none resize-none min-h-[80px]',
  'placeholder:text-muted-foreground',
  'disabled:cursor-not-allowed',
  'pb-2',
].join(' ')

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, required, error, colorScheme, ...props }, ref) => {
    const generatedId = useId()
    const textareaId = props.id || generatedId

    return (
      <FieldWrapper label={label} required={required} error={error} colorScheme={colorScheme} htmlFor={textareaId}>
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
