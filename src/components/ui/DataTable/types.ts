import type { ReactNode } from 'react'
import type { ColorScheme } from '../../../types'

export type ColumnEditor =
  | { type: 'input'; inputType?: 'text' | 'number' | 'email' | 'date' | 'tel' | 'url' }
  | { type: 'select'; options: { value: string | number; label: ReactNode }[] }
  | { type: 'check' }

export type CellValue = string | number | boolean

export type EditTrigger = 'dblclick' | 'icon' | 'both'

export type CellEditPayload<T> = {
  row: T
  rowKey: string | number
  columnKey: keyof T
  value: CellValue
  updatedRow: T
}

export type Column<T> = {
  header: string
  key?: keyof T
  render?: (row: T) => ReactNode
  filterValue?: (row: T) => string
  sortValue?: (row: T) => string | number
  sortable?: boolean
  className?: string
  editable?: ColumnEditor
}

export type SortDirection = 'asc' | 'desc'

export type SelectionMode = 'none' | 'single' | 'multiple'

export type Density = 'default' | 'compact'

export type DataTableProps<T> = {
  columns: Column<T>[]
  data: T[]
  keyExtractor: (row: T) => string | number
  className?: string
  colorScheme?: ColorScheme
  pageSize?: number
  searchable?: boolean
  showPageSize?: boolean
  searchPlaceholder?: string
  selection?: SelectionMode
  selected?: (string | number)[]
  onSelectionChange?: (selected: (string | number)[]) => void
  loading?: boolean
  density?: Density
  stickyFirst?: boolean
  striped?: boolean
  scrollable?: boolean
  scrollHeight?: number
  rowHeight?: number
  emptyContent?: ReactNode
  onRowClick?: (row: T) => void
  renderExpanded?: (row: T) => ReactNode
  expandOnRowClick?: boolean
  rowClassName?: (row: T) => string
  expanded?: (string | number)[]
  onExpandedChange?: (expanded: (string | number)[]) => void
  editTrigger?: EditTrigger
  onCellEdit?: (payload: CellEditPayload<T>) => void
}
