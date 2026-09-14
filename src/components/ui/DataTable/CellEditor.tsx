import { type KeyboardEvent } from 'react'
import { cn, getEditClass, getEditAccent } from './helpers'
import type { CellValue, ColumnEditor } from './types'
import type { ColorScheme } from '../../../types'

type CellEditorProps = {
  editor: ColumnEditor
  value: CellValue
  colorScheme: ColorScheme
  onCommit: (value: CellValue) => void
  onCancel: () => void
}

export function CellEditor({ editor, value, colorScheme, onCommit, onCancel }: CellEditorProps) {
  if (editor.type === 'input') {
    const initial = value == null ? '' : String(value)
    const commitIfChanged = (raw: string) => {
      if (raw !== initial) onCommit(raw)
      else onCancel()
    }
    const inputProps = editor.props ?? {}
    const { className: userClassName, ...restProps } = inputProps
    const internalClassName = cn(getEditClass(colorScheme), '-my-1')
    return (
      <input
        {...restProps}
        className={cn(internalClassName, userClassName)}
        autoFocus
        defaultValue={initial}
        type={inputProps.type ?? 'text'}
        onClick={(e) => e.stopPropagation()}
        onDoubleClick={(e) => e.stopPropagation()}
        onBlur={(e) => commitIfChanged(e.target.value)}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            commitIfChanged(e.currentTarget.value)
          } else if (e.key === 'Escape') {
            e.preventDefault()
            onCancel()
          }
        }}
      />
    )
  }

  if (editor.type === 'select') {
    const initial = value == null ? '' : String(value)
    return (
      <select
        autoFocus
        defaultValue={initial}
        className={cn(getEditClass(colorScheme), '-my-1')}
        onClick={(e) => e.stopPropagation()}
        onDoubleClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          const raw = e.target.value
          const match = editor.options.find((o) => String(o.value) === raw)
          onCommit(match ? match.value : raw)
        }}
        onBlur={onCancel}
      >
        {editor.options.map((opt) => (
          <option key={String(opt.value)} value={String(opt.value)}>
            {opt.label}
          </option>
        ))}
      </select>
    )
  }

  const checked = value === true || value === 'true'
  return (
    <input
      autoFocus
      type="checkbox"
      defaultChecked={checked}
      className={cn('h-4 w-4 cursor-pointer rounded border-border', getEditAccent(colorScheme))}
      onClick={(e) => e.stopPropagation()}
      onChange={(e) => onCommit(e.target.checked)}
      onBlur={onCancel}
    />
  )
}
