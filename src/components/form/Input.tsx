import { useId } from 'react'
import { FieldWrapper } from './FieldWrapper'
import { cn } from '../../lib/cn'
import type { InputProps } from './types'

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
        className={cn(baseClass, className)}
        {...props}
      />
    </FieldWrapper>
  )
}

export type { InputProps } from './types'
