import { useId } from 'react'
import { FieldWrapper } from '../FieldWrapper'
import { cn } from '../../../lib/cn'
import { baseClass, resizeMap } from './styles'
import type { TextAreaProps } from './types'

export function TextArea({ className, label, error, colorScheme, resize = 'none', isRequired, ref, ...props }: TextAreaProps) {
  const generatedId = useId()
  const textareaId = props.id || generatedId

  return (
    <FieldWrapper label={label} error={error} colorScheme={colorScheme} htmlFor={textareaId} isRequired={isRequired}>
      <textarea
        ref={ref}
        id={textareaId}
        className={cn(baseClass, resizeMap[resize], className)}
        {...props}
      />
    </FieldWrapper>
  )
}