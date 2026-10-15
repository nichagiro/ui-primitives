import { cn } from '../../../lib/cn'
import { getSelectAllButtonClass, getHeaderCellClass } from './helpers'
import { SortIcon } from './SortIcon'
import { CheckIcon, MinusIcon } from '../../../lib/Icons'
import type { Column, SelectionMode, SortDirection } from './types'
import type { ColorScheme } from '../../../types'

type TableHeaderProps<T> = {
  columns: Column<T>[]
  colorScheme: ColorScheme
  selection: SelectionMode
  hasExpandToggle: boolean
  stickyFirst: boolean
  thPadding: string
  sortKey: number | null
  sortDir: SortDirection
  onSort: (colIndex: number) => void
  allPageSelected: boolean
  somePageSelected: boolean
  onSelectAll: () => void
}

export function TableHeader<T extends Record<string, unknown>>({
  columns,
  colorScheme,
  selection,
  hasExpandToggle,
  stickyFirst,
  thPadding,
  sortKey,
  sortDir,
  onSort,
  allPageSelected,
  somePageSelected,
  onSelectAll,
}: TableHeaderProps<T>) {
  return (
    <thead className="sticky top-0 z-30">
      <tr className="border-b border-border">
        {hasExpandToggle && <th className={cn(thPadding, 'w-10 bg-muted')} />}
        {selection !== 'none' && (
          <th className={cn(thPadding, 'w-10 text-center bg-muted')}>
            {selection === 'multiple' && (
              <button
                type="button"
                onClick={onSelectAll}
                className={getSelectAllButtonClass(allPageSelected || somePageSelected, colorScheme)}
                aria-label={allPageSelected ? 'Deseleccionar todo' : 'Seleccionar todo'}
              >
                {allPageSelected
                  ? <CheckIcon className="h-3.5 w-3.5" />
                  : somePageSelected
                    ? <MinusIcon className="h-3.5 w-3.5" />
                    : null}
              </button>
            )}
          </th>
        )}
        {columns.map((col, i) => (
          <th
            key={String(col.key ?? col.header)}
            className={getHeaderCellClass(thPadding, col.sortable, stickyFirst && i === 0, col.className)}
            onClick={() => onSort(i)}
          >
            <span className="inline-flex items-center gap-1.5">
              {col.header}
              {col.sortable && <SortIcon active={sortKey === i} direction={sortDir} />}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  )
}
