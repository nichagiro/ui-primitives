import type { ReactNode, InputHTMLAttributes } from 'react'
import type { ColorScheme } from '../../../types'

export type ColumnEditor =
  | { type: 'input'; props?: InputHTMLAttributes<HTMLInputElement> }
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
  disabledRows?: (string | number)[]
}

/**
 * Configuración y acciones compartidas por las filas/celdas de la tabla.
 * Interna: la produce `useDataTable` y la consumen `TableBody`/`TableRow`.
 */
export type TableView<T> = {
  columns: Column<T>[]
  colorScheme: ColorScheme
  selection: SelectionMode
  hasExpandToggle: boolean
  striped: boolean
  stickyFirst: boolean
  tdPadding: string
  editTrigger: EditTrigger
  rowClassName?: (row: T) => string
  renderExpanded?: (row: T) => ReactNode
  hasRowInteraction: boolean
  expandOnRowClickEff: boolean
  editing: { rowKey: string | number; colKey: string } | null
  colCount: number
  keyExtractor: (row: T) => string | number
  isSelected: (key: string | number) => boolean
  isExpanded: (key: string | number) => boolean
  isDisabled: (key: string | number) => boolean
  toggleSelection: (key: string | number) => void
  toggleExpanded: (key: string | number) => void
  startEdit: (rowKey: string | number, colKey: string) => void
  commitEdit: (row: T, colKey: keyof T, editor: ColumnEditor, raw: CellValue) => void
  cancelEdit: () => void
  onRowClick?: (row: T) => void
}
