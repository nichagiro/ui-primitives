import { useEffect, useMemo, type MouseEvent } from 'react'
import { CloseIcon, FileIcon } from '../../../lib/Icons'
import { formatSize, isImage } from './helpers'

type FileListProps = {
  files: File[]
  onRemove: (index: number) => void
}

export function FileList({ files, onRemove }: FileListProps) {
  const previews = useMemo(
    () => files.map(f => ({
      file: f,
      url: URL.createObjectURL(f),
      name: f.name,
      size: f.size,
    })),
    [files],
  )

  useEffect(() => {
    return () => previews.forEach(p => URL.revokeObjectURL(p.url))
  }, [previews])

  if (files.length === 0) return null

  return (
    <ul className="mt-3 space-y-2">
      {previews.map((preview, i) => (
        <FileItem
          key={`${preview.name}-${i}`}
          preview={preview}
          onRemove={(e) => { e.stopPropagation(); onRemove(i) }}
        />
      ))}
    </ul>
  )
}

type FileItemProps = {
  preview: { url: string; name: string; size: number; file: File }
  onRemove: (e: MouseEvent<HTMLButtonElement>) => void
}

function FileItem({ preview, onRemove }: FileItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-md border border-border bg-muted/30 px-3 py-2 text-sm">
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
        onClick={onRemove}
        className="shrink-0 rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label={`Eliminar ${preview.name}`}
      >
        <CloseIcon className="h-4 w-4" />
      </button>
    </li>
  )
}
