import type { ReactNode } from 'react'
import { CheckIcon, Spinner } from '../../../lib/Icons'
import { selectAllOptionClass, optionRowClass, optionCheckboxClass, optionCheckIconClass } from './styles'
import type { ColorScheme } from '../../../types'
import type { OptionValue } from './types'

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
          className={selectAllOptionClass(highlightedIndex === 0)}
          onClick={onSelectAll}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelectAll() }}
          onMouseEnter={() => onHighlight(0)}
        >
          <span className={optionCheckboxClass(filteredAllSelected, colorScheme)}>
            <CheckIcon className={optionCheckIconClass(filteredAllSelected)} />
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
            className={optionRowClass(displayIndex === highlightedIndex, isSelected, colorScheme)}
            onClick={() => onOptionClick(opt.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOptionClick(opt.value) }}
            onMouseEnter={() => onHighlight(displayIndex)}
          >
            {multiple && (
              <span className={optionCheckboxClass(isSelected, colorScheme)}>
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