import type {
  ChangeEvent,
  DragEvent,
  FocusEventHandler,
  InputHTMLAttributes,
  Ref,
} from 'react'
import { UploadIcon } from '../../../lib/Icons'
import { dropzoneClass } from './styles'
import type { ColorScheme } from '../../../types'

type FileDropzoneProps = {
  inputId: string
  inputRef: Ref<HTMLInputElement>
  colorScheme: ColorScheme
  dragging: boolean
  disabled?: boolean
  accept?: string
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  onPickerChange: (e: ChangeEvent<HTMLInputElement>) => void
  onDragOver: (e: DragEvent) => void
  onDragLeave: () => void
  onDrop: (e: DragEvent) => void
  onBlur?: FocusEventHandler<HTMLInputElement>
}

export function FileDropzone({
  inputId,
  inputRef,
  colorScheme,
  dragging,
  disabled,
  accept,
  inputProps,
  onPickerChange,
  onDragOver,
  onDragLeave,
  onDrop,
  onBlur,
}: FileDropzoneProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={dropzoneClass(colorScheme, dragging, disabled)}
      onClick={() => { if (!disabled) document.getElementById(inputId)?.click() }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <UploadIcon className="h-8 w-8 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">
        {dragging ? 'Suelta los archivos aquí' : 'Arrastra archivos o haz clic'}
      </p>
      {accept && (
        <p className="text-xs text-muted-foreground/60">
          Formatos: {accept.split(',').join(', ')}
        </p>
      )}
      <input
        ref={inputRef}
        type="file"
        id={inputId}
        className="sr-only"
        tabIndex={-1}
        {...inputProps}
        onChange={onPickerChange}
        onBlur={onBlur}
      />
    </button>
  )
}
