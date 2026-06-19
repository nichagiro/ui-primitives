import {
  forwardRef,
  useId,
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  type InputHTMLAttributes,
  type ChangeEvent,
  type DragEvent,
} from 'react'
import { FieldWrapper } from './FieldWrapper'
import { assignRef } from '../../lib/assignRef'
import { CloseIcon } from '../../lib/Icons'
import type { ColorScheme } from '../../types'

export type FileUploadProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'children'> & {
  label: string
  required?: boolean
  error?: string
  colorScheme?: ColorScheme
  multiple?: boolean
  maxSize?: number
  files?: File[]
  onFilesChange?: (files: File[]) => void
}

function formatSize(bytes: number) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  if (bytes >= 1024) return (bytes / 1024).toFixed(0) + ' KB'
  return bytes + ' B'
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-muted-foreground" aria-hidden="true">
      <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636V13.25z" />
      <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5z" />
    </svg>
  )
}

const dragBorder: Record<ColorScheme, string> = {
  primary: 'border-primary bg-primary/5',
  secondary: 'border-secondary bg-secondary/5',
  success: 'border-success bg-success/5',
  warning: 'border-warning bg-warning/5',
  danger: 'border-danger bg-danger/5',
  info: 'border-info bg-info/5',
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      label,
      required,
      error: externalError,
      colorScheme = 'primary',
      maxSize,
      files: controlledFiles,
      onFilesChange,
      className,
      onChange: onChangeProp,
      onBlur: onBlurProp,
      ...props
    },
    ref,
  ) => {
    const isControlled = controlledFiles !== undefined
    const generatedId = useId()
    const inputId = props.id || generatedId
    const [internalFiles, setInternalFiles] = useState<File[]>([])
    const [dragging, setDragging] = useState(false)
    const [sizeError, setSizeError] = useState<string>()
    const [dupError, setDupError] = useState<string>()

    const inputRef = useRef<HTMLInputElement>(null)
    const onChangeRef = useRef(onChangeProp)
    useEffect(() => {
      onChangeRef.current = onChangeProp
    }, [onChangeProp])

    const combinedRef = useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node
        assignRef(ref, node)
      },
      [ref],
    )

    const files = useMemo(
      () => isControlled ? (controlledFiles ?? []) : internalFiles,
      [isControlled, controlledFiles, internalFiles],
    )

    function syncFilesToRHF(updated: File[]) {
      const input = inputRef.current
      if (!input) return

      if (!onChangeRef.current) return

      const dt = new DataTransfer()
      updated.forEach(f => dt.items.add(f))

      Object.defineProperty(input, 'files', {
        value: dt.files,
        writable: false,
        configurable: true,
      })

      const fakeEvent = {
        target: input,
        currentTarget: input,
        type: 'change',
      } as ChangeEvent<HTMLInputElement>

      onChangeRef.current(fakeEvent)

      delete (input as { files?: unknown }).files
    }

    function processIncoming(incoming: File[]) {
      if (maxSize) {
        const tooBig = incoming.find(f => f.size > maxSize)
        if (tooBig) {
          const mb = maxSize > 1024 * 1024
            ? (maxSize / (1024 * 1024)).toFixed(0) + ' MB'
            : (maxSize / 1024).toFixed(0) + ' KB'
          setSizeError(`Archivo supera el límite de ${mb}`)
          return
        }
      }
      setSizeError(undefined)

      let incomingFiles: File[]
      const dupNames: string[] = []

      if (props.multiple) {
        const existingNames = new Set(files.map(f => f.name))
        incomingFiles = []
        incoming.forEach(f => {
          if (existingNames.has(f.name)) {
            dupNames.push(f.name)
          } else {
            incomingFiles.push(f)
          }
        })
        setDupError(dupNames.length > 0 ? `${dupNames.join(', ')} ya existe` : undefined)
      } else {
        incomingFiles = incoming.slice(0, 1)
        setDupError(undefined)
      }

      const updated = props.multiple ? [...files, ...incomingFiles] : incomingFiles

      if (isControlled) {
        onFilesChange?.(updated)
      } else {
        setInternalFiles(updated)
        syncFilesToRHF(updated)
      }
    }

    function handlePickerChange(e: ChangeEvent<HTMLInputElement>) {
      e.preventDefault()
      e.stopPropagation()
      const selected = e.target.files
      if (!selected || selected.length === 0) return
      processIncoming(Array.from(selected))
    }

    function handleDragOver(e: DragEvent) {
      e.preventDefault()
      if (!props.disabled) setDragging(true)
    }

    function handleDragLeave() {
      setDragging(false)
    }

    function handleDrop(e: DragEvent) {
      e.preventDefault()
      setDragging(false)
      if (props.disabled) return
      const incoming = Array.from(e.dataTransfer.files)
      if (incoming.length === 0) return
      processIncoming(incoming)
    }

    function removeFile(index: number) {
      setDupError(undefined)
      const updated = files.filter((_, i) => i !== index)
      if (isControlled) {
        onFilesChange?.(updated)
      } else {
        setInternalFiles(updated)
        syncFilesToRHF(updated)
      }
    }

    const previews = useMemo(() =>
      files.map(f => ({
        file: f,
        url: URL.createObjectURL(f),
        name: f.name,
        size: f.size,
      })),
    [files])

    useEffect(() => {
      return () => previews.forEach(p => URL.revokeObjectURL(p.url))
    }, [previews])

    const isImage = (file: File) => file.type.startsWith('image/')

    const error = externalError || sizeError || dupError

    return (
      <FieldWrapper label={label} required={required} error={error} colorScheme={colorScheme} htmlFor={inputId}>
        <div className={className ? 'pb-2 ' + className : 'pb-2'}>
          <div
            className={[
              'relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed px-4 py-6 text-center transition-colors',
              dragging ? dragBorder[colorScheme] : 'border-border hover:border-muted-foreground',
              props.disabled ? 'cursor-not-allowed opacity-60' : '',
            ].join(' ')}
            onClick={() => { if (!props.disabled) document.getElementById(inputId)?.click() }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <UploadIcon />
            <p className="text-sm text-muted-foreground">
              {dragging ? 'Suelta los archivos aquí' : 'Arrastra archivos o haz clic'}
            </p>
            {props.accept && (
              <p className="text-xs text-muted-foreground/60">
                Formatos: {props.accept.split(',').join(', ')}
              </p>
            )}
            <input
              ref={combinedRef}
              type="file"
              id={inputId}
              className="sr-only"
              tabIndex={-1}
              {...props}
              onChange={handlePickerChange}
              onBlur={onBlurProp}
            />
          </div>
          {files.length > 0 && (
            <ul className="mt-3 space-y-2">
              {previews.map((preview, i) => (
                <li
                  key={`${preview.name}-${i}`}
                  className="flex items-center gap-3 rounded-md border border-border bg-muted/30 px-3 py-2 text-sm"
                >
                  {isImage(preview.file) ? (
                    <img
                      src={preview.url}
                      alt={preview.name}
                      className="h-10 w-10 shrink-0 rounded object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-muted text-muted-foreground">
                      <FileIcon />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-foreground">{preview.name}</p>
                    <p className="text-xs text-muted-foreground">{formatSize(preview.size)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); removeFile(i) }}
                    className="shrink-0 rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label={`Eliminar ${preview.name}`}
                  >
                    <CloseIcon className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </FieldWrapper>
    )
  },
)

FileUpload.displayName = 'FileUpload'
