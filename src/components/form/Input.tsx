import { useId, type InputHTMLAttributes, type Ref } from 'react'
import { FieldWrapper } from './FieldWrapper'
import type { ColorScheme } from '../../types'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>
  label: string
  error?: string
  colorScheme?: ColorScheme
  isRequired?: boolean
}

const baseClass = [
  'block w-full bg-transparent text-sm text-foreground outline-none',
  'placeholder:text-muted-foreground',
  'disabled:cursor-not-allowed',
  'pb-2',
].join(' ')

export function Input({ className, label, error, colorScheme, isRequired, ref, ...props }: InputProps) {
  const generatedId = useId()
  const inputId = props.id || generatedId

  return (
    <FieldWrapper label={label} error={error} colorScheme={colorScheme} htmlFor={inputId} isRequired={isRequired}>
      <input
        ref={ref}
        id={inputId}
        className={className ? baseClass + ' ' + className : baseClass}
        {...props}
      />
    </FieldWrapper>
  )
}
