import type { ReactNode } from 'react'
import { CheckIcon, Spinner } from '../../../lib/Icons'
import { borderSolidColor, softColor } from '../../../lib/colorSchemes'
import { cn } from '../../../lib/cn'
import type { ColorScheme } from '../../../types'
import type { OptionValue } from '../types'

type SelectOptionsListProps = {
  loading: boolean
  filteredOptions: { value: OptionValue; label: ReactNode }[]
  showSelectAll: boolean
  filteredAllSelected: boolean
  highlightedIndex: number
  colorScheme: ColorScheme
  currentValues: OptionValue[]
  multiple: boolean
  searchQuery: string
  filteredAllValues: OptionValue[]
  onSelectAll: () => void
  onOptionClick: (value: OptionValue) => void
  onHighlight: (index: number) => void
}

const checkboxSelected = borderSolidColor()
const optionSelected = softColor()

export function SelectOptionsList({
  loading,
  filteredOptions,
  showSelectAll,
  filteredAllSelected,
  highlightedIndex,
  colorScheme,
  currentValues,
  multiple,
  searchQuery,
  filteredAllValues,
  onSelectAll,
  onOptionClick,
  onHighlight,
}: SelectOptionsListProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-6">
        <Spinner className="mx-auto h-5 w-5 text-muted-foreground" />
      </div>
    )
  }

  if (filteredOptions.length === 0) {
    return (
      <p className="px-3 py-4 text-center text-sm text-muted-foreground">
        Sin resultados
      </p>
    )
  }

  return (
    <>
      {showSelectAll && (
        <div
          role="option"
          tabIndex={-1}
          aria-selected={filteredAllSelected}
          className={
            'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors text-foreground border-b border-border'
            + (highlightedIndex === 0 ? ' bg-muted' : '')
          }
          onClick={onSelectAll}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelectAll() }}
          onMouseEnter={() => onHighlight(0)}
        >
          <span className={'inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ' + (filteredAllSelected ? checkboxSelected[colorScheme] : 'border-border')}>
            <CheckIcon className={'h-3 w-3 transition-opacity ' + (filteredAllSelected ? 'opacity-100' : 'opacity-0')} />
          </span>
          {`Seleccionar todos${searchQuery ? ` (${filteredAllValues.length} resultados)` : ''}`}
        </div>
      )}
      {filteredOptions.map((opt, i) => {
        const displayIndex = showSelectAll ? i + 1 : i
        const isSelected = currentValues.some(cv => String(cv) === String(opt.value))
        return (
          <div
            key={`${opt.value}-${i}`}
            role="option"
            tabIndex={-1}
            aria-selected={isSelected}
            className={cn(
              'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors',
              'text-foreground',
              displayIndex === highlightedIndex && 'bg-muted',
              isSelected && optionSelected[colorScheme],
            )}
            onClick={() => onOptionClick(opt.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOptionClick(opt.value) }}
            onMouseEnter={() => onHighlight(displayIndex)}
          >
            {multiple && (
              <span className={'inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ' + (isSelected ? checkboxSelected[colorScheme] : 'border-border')}>
                {isSelected && <CheckIcon className="h-3 w-3" />}
              </span>
            )}
            {opt.label}
          </div>
        )
      })}
    </>
  )
}