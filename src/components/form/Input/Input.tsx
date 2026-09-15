import { useId } from 'react'
import { FieldWrapper } from '../FieldWrapper'
import { cn } from '../../../lib/cn'
import { baseClass } from './styles'
import type { InputProps } from './types'

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