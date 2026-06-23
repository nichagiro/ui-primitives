import { useId, type TextareaHTMLAttributes, type Ref } from 'react'
import { FieldWrapper } from './FieldWrapper'
import type { ColorScheme } from '../../types'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  ref?: Ref<HTMLTextAreaElement>
  label: string
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

export function TextArea({ className, label, error, colorScheme, resize = 'none', ref, ...props }: TextAreaProps) {
  const generatedId = useId()
  const textareaId = props.id || generatedId

  return (
    <FieldWrapper label={label} error={error} colorScheme={colorScheme} htmlFor={textareaId}>
      <textarea
        ref={ref}
        id={textareaId}
        className={baseClass + ' ' + resizeMap[resize] + (className ? ' ' + className : '')}
        {...props}
      />
    </FieldWrapper>
  )
}
