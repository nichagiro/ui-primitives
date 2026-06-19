import { forwardRef, useId, type TextareaHTMLAttributes } from 'react'
import { FieldWrapper } from './FieldWrapper'
import type { ColorScheme } from '../../lib/types'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  required?: boolean
  error?: string
  colorScheme?: ColorScheme
  resize?: 'none' | 'vertical' | 'both'
}

const resizeMap = {
  none: 'resize-none',
  vertical: 'resize-y',
  both: 'resize',
}

const baseClass = [
  'block w-full bg-transparent text-sm text-foreground outline-none min-h-[80px]',
  'placeholder:text-muted-foreground',
  'disabled:cursor-not-allowed',
  'pb-2',
].join(' ')

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, required, error, colorScheme, resize = 'none', ...props }, ref) => {
    const generatedId = useId()
    const textareaId = props.id || generatedId

    return (
      <FieldWrapper label={label} required={required} error={error} colorScheme={colorScheme} htmlFor={textareaId}>
        <textarea
          ref={ref}
          id={textareaId}
          className={baseClass + ' ' + resizeMap[resize] + (className ? ' ' + className : '')}
          {...props}
        />
      </FieldWrapper>
    )
  },
)
TextArea.displayName = 'TextArea'
