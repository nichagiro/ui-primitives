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
import { FieldWrapper } from '../FieldWrapper'
import { assignRef } from '../../../lib/assignRef'
import { cn } from '../../../lib/cn'
import { FileDropzone } from './FileDropzone'
import { FileList } from './FileList'
import type { FileUploadProps } from './types'

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

  const error = externalError || sizeError || dupError

  return (
    <FieldWrapper label={label} error={error} colorScheme={colorScheme} htmlFor={inputId} isRequired={isRequired}>
      <div className={cn('pb-2', className)}>
        <FileDropzone
          inputId={inputId}
          inputRef={combinedRef}
          colorScheme={colorScheme}
          dragging={dragging}
          disabled={props.disabled}
          accept={props.accept}
          inputProps={props}
          onPickerChange={handlePickerChange}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onBlur={onBlurProp}
        />
        <FileList files={files} onRemove={removeFile} />
      </div>
    </FieldWrapper>
  )
}
