import {
  useId,
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  type ChangeEvent,
  type DragEvent,
} from 'react'
import { FieldWrapper } from './FieldWrapper'
import { assignRef } from '../../lib/assignRef'
import { CloseIcon, UploadIcon, FileIcon } from '../../lib/Icons'
import { borderBgColorAlpha } from '../../lib/colorSchemes'
import type { FileUploadProps } from './types'

function formatSize(bytes: number) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  if (bytes >= 1024) return (bytes / 1024).toFixed(0) + ' KB'
  return bytes + ' B'
}

const dragBorder = borderBgColorAlpha()
function isImage(file: File) {
  return file.type.startsWith('image/')
}

export function FileUpload(
  {
    label,
    error: externalError,
    colorScheme = 'primary',
    isRequired,
    maxSize,
    files: controlledFiles,
    onFilesChange,
    className,
    onChange: onChangeProp,
    onBlur: onBlurProp,
    ref,
    ...props
  }: FileUploadProps,
) {
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

  const error = externalError || sizeError || dupError

  return (
    <FieldWrapper label={label} error={error} colorScheme={colorScheme} htmlFor={inputId} isRequired={isRequired}>
      <div className={className ? 'pb-2 ' + className : 'pb-2'}>
        <button
          type="button"
          disabled={props.disabled}
          className={[
            'relative flex w-full flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed px-4 py-6 text-center transition-colors',
            props.disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
            dragging ? dragBorder[colorScheme] : 'border-border hover:border-muted-foreground',
          ].join(' ')}
          onClick={() => { if (!props.disabled) document.getElementById(inputId)?.click() }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <UploadIcon className="h-8 w-8 text-muted-foreground" />
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
        </button>
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
                    <FileIcon className="h-5 w-5" />
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
}

export type { FileUploadProps } from './types'
