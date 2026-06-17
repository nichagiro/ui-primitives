import type { ReactNode } from 'react'

export type Column<T> = {
  header: string
  key?: keyof T
  render?: (row: T) => ReactNode
  filterValue?: (row: T) => string
  sortValue?: (row: T) => string | number
  sortable?: boolean
  className?: string
}

export type SortDirection = 'asc' | 'desc'

export type SelectionMode = 'none' | 'single' | 'multiple'

export type Density = 'default' | 'compact'

export type DataTableProps<T> = {
  columns: Column<T>[]
  data: T[]
  keyExtractor: (row: T) => string | number
  className?: string
  pageSize?: number
  searchable?: boolean
  searchPlaceholder?: string
  selection?: SelectionMode
  selected?: (string | number)[]
  onSelectionChange?: (selected: (string | number)[]) => void
  card?: boolean
  loading?: boolean
  density?: Density
  stickyFirst?: boolean
  stickySelection?: boolean
  striped?: boolean
  scrollable?: boolean | string
  emptyContent?: ReactNode
  onRowClick?: (row: T) => void
}
