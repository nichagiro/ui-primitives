import { useState, useMemo } from 'react'
import type { UIEvent } from 'react'
import { getValue, estimateRowHeight } from './helpers'
import type { ColumnEditor, CellValue, DataTableProps, TableView } from './types'
import type { ColorScheme } from '../../../types'

const OVERSCAN = 6

/**
 * Concentra todo el estado y la lógica de `DataTable` (búsqueda, orden, paginado,
 * virtualización, selección, expansión y edición) y devuelve los props ya listos
 * para `Toolbar`, `TableHeader`, `TableBody` y `TableFooter`.
 */
export function useDataTable<T extends Record<string, unknown>>({
  columns,
  data,
  keyExtractor,
  colorScheme: outerColorScheme,
  pageSize: defaultPageSize = 10,
  searchable = true,
  showPageSize: showPageSizeProp,
  searchPlaceholder = 'Buscar...',
  selection = 'none',
  selected: controlledSelected,
  onSelectionChange,
  loading = false,
  density = 'default',
  stickyFirst = false,
  striped = false,
  scrollable,
  scrollHeight,
  emptyContent,
  onRowClick,
  renderExpanded,
  expandOnRowClick,
  rowClassName,
  expanded: controlledExpanded,
  onExpandedChange,
  editTrigger = 'both',
  onCellEdit,
  rowHeight: outerRowHeight,
  disabledRows: disabledRowKeys = [],
}: DataTableProps<T>) {
  const colorScheme: ColorScheme = outerColorScheme ?? 'primary'
  const [sortKey, setSortKey] = useState<number | null>(null)
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(defaultPageSize)
  const [internalSelected, setInternalSelected] = useState<(string | number)[]>(controlledSelected ?? [])
  const [internalExpanded, setInternalExpanded] = useState<(string | number)[]>([])
  const [editing, setEditing] = useState<{ rowKey: string | number; colKey: string } | null>(null)
  const [scrollTop, setScrollTop] = useState(0)

  const effectiveSelected = controlledSelected ?? internalSelected
  const effectiveExpanded = controlledExpanded ?? internalExpanded

  const isDisabled = (key: string | number) => disabledRowKeys.includes(key)

  function handleSort(colIndex: number) {
    if (!columns[colIndex].sortable) return
    if (sortKey === colIndex) {
      setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(colIndex)
      setSortDir('asc')
    }
  }

  function toggleSelection(key: string | number) {
    if (isDisabled(key)) return
    let newSelected: (string | number)[]
    if (selection === 'single') {
      newSelected = effectiveSelected.includes(key) ? [] : [key]
    } else {
      newSelected = effectiveSelected.includes(key)
        ? effectiveSelected.filter((k) => k !== key)
        : [...effectiveSelected, key]
    }
    if (controlledSelected === undefined) setInternalSelected(newSelected)
    onSelectionChange?.(newSelected)
  }

  function toggleExpanded(key: string | number) {
    if (isDisabled(key)) return
    const newExpanded = effectiveExpanded.includes(key)
      ? effectiveExpanded.filter((k) => k !== key)
      : [...effectiveExpanded, key]
    if (controlledExpanded === undefined) setInternalExpanded(newExpanded)
    onExpandedChange?.(newExpanded)
  }

  function startEdit(rowKey: string | number, colKey: string) {
    if (isDisabled(rowKey)) return
    setEditing({ rowKey, colKey })
  }

  function cancelEdit() {
    setEditing(null)
  }

  function commitEdit(row: T, colKey: keyof T, editor: ColumnEditor, raw: CellValue) {
    const rowKey = keyExtractor(row)
    let value: CellValue = raw
    if (editor.type === 'input' && editor.props?.type === 'number') {
      const num = Number(raw)
      value = raw === '' || Number.isNaN(num) ? raw : num
    }
    const updatedRow = { ...row, [colKey]: value } as T
    onCellEdit?.({ row, rowKey, columnKey: colKey, value, updatedRow })
    setEditing(null)
  }

  function handleSelectAll() {
    const pageKeySet = new Set(
      paginated.filter((row) => !isDisabled(keyExtractor(row))).map((row) => keyExtractor(row))
    )
    const effectiveSet = new Set(effectiveSelected)
    const allSelected = [...pageKeySet].every((k) => effectiveSet.has(k))
    let newSelected: (string | number)[]
    if (allSelected) {
      newSelected = effectiveSelected.filter((k) => !pageKeySet.has(k))
    } else {
      newSelected = [...effectiveSelected]
      for (const k of pageKeySet) {
        if (!effectiveSet.has(k)) newSelected.push(k)
      }
    }
    if (controlledSelected === undefined) setInternalSelected(newSelected)
    onSelectionChange?.(newSelected)
  }

  const filtered = useMemo(() => {
    if (!search.trim()) return data
    const q = search.toLowerCase()
    return data.filter((row) =>
      columns.some((col) => {
        const val = col.filterValue
          ? col.filterValue(row)
          : col.key
            ? row[col.key]
            : getValue(row, col)
        return String(val ?? '').toLowerCase().includes(q)
      })
    )
  }, [data, search, columns])

  const sorted = useMemo(() => {
    if (sortKey === null) return filtered
    const col = columns[sortKey]
    return filtered.toSorted((a, b) => {
      const aVal = String(
        col.sortValue
          ? col.sortValue(a)
          : col.key
            ? a[col.key]
            : getValue(a, col) ?? ''
      )
      const bVal = String(
        col.sortValue
          ? col.sortValue(b)
          : col.key
            ? b[col.key]
            : getValue(b, col) ?? ''
      )
      const cmp = aVal.localeCompare(bVal)
      return sortDir === 'asc' ? cmp : -cmp
    })
  }, [filtered, sortKey, sortDir, columns])

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const clampedPage = Math.min(page, totalPages)

  const paginatedStart = (clampedPage - 1) * pageSize
  const paginated = scrollable ? sorted : sorted.slice(paginatedStart, paginatedStart + pageSize)

  const rowH = outerRowHeight ?? estimateRowHeight(density)
  const vh = scrollHeight ?? 384

  let winStart = 0
  let winEnd = sorted.length
  let topSpacerH = 0
  let bottomSpacerH = 0

  if (scrollable && !renderExpanded && sorted.length > 0) {
    winStart = Math.max(0, Math.floor(scrollTop / rowH) - OVERSCAN)
    winEnd = Math.min(sorted.length, Math.ceil((scrollTop + vh) / rowH) + OVERSCAN)

    const forceIndex = (k: string | number) => {
      const i = sorted.findIndex((r) => keyExtractor(r) === k)
      if (i >= 0) {
        if (i < winStart) winStart = i
        if (i + 1 > winEnd) winEnd = i + 1
      }
    }
    if (editing) forceIndex(editing.rowKey)

    topSpacerH = winStart * rowH
    bottomSpacerH = (sorted.length - winEnd) * rowH
  }

  const rendered = scrollable ? sorted.slice(winStart, winEnd) : paginated

  const startRecord = sorted.length === 0 ? 0 : (clampedPage - 1) * pageSize + 1
  const endRecord = Math.min(clampedPage * pageSize, sorted.length)

  const pageKeys = paginated.filter((row) => !isDisabled(keyExtractor(row))).map((row) => keyExtractor(row))
  const allPageSelected = pageKeys.length > 0 && pageKeys.every((k) => effectiveSelected.includes(k))
  const somePageSelected = pageKeys.some((k) => effectiveSelected.includes(k))

  const hasPagination = !loading && totalPages > 1 && !scrollable
  const hasExpandToggle = !!renderExpanded
  const expandOnRowClickEff = hasExpandToggle && (expandOnRowClick ?? selection === 'none')
  const hasRowInteraction = selection !== 'none' || !!onRowClick || expandOnRowClickEff
  const thPadding = density === 'compact' ? 'px-3 py-2' : 'px-4 py-3.5'
  const tdPadding = density === 'compact' ? 'px-3 py-1.5' : 'px-4 py-3'
  const colCount = columns.length + (selection !== 'none' ? 1 : 0) + (hasExpandToggle ? 1 : 0)

  const view: TableView<T> = {
    columns,
    colorScheme,
    selection,
    hasExpandToggle,
    striped,
    stickyFirst,
    tdPadding,
    editTrigger,
    rowClassName,
    renderExpanded,
    hasRowInteraction,
    expandOnRowClickEff,
    editing,
    colCount,
    keyExtractor,
    isSelected: (key) => effectiveSelected.includes(key),
    isExpanded: (key) => effectiveExpanded.includes(key),
    isDisabled,
    toggleSelection,
    toggleExpanded,
    startEdit,
    commitEdit,
    cancelEdit,
    onRowClick,
  }

  const onScroll = scrollable
    ? (e: UIEvent<HTMLDivElement>) => setScrollTop(e.currentTarget.scrollTop)
    : undefined

  return {
    toolbarProps: {
      searchable,
      search,
      searchPlaceholder,
      onSearchChange: (value: string) => {
        setSearch(value)
        setPage(1)
      },
      showPageSize: showPageSizeProp ?? !scrollable,
      pageSize,
      onPageSizeChange: (size: number) => {
        setPageSize(size)
        setPage(1)
      },
      colorScheme,
    },
    headerProps: {
      columns,
      colorScheme,
      selection,
      hasExpandToggle,
      stickyFirst,
      thPadding,
      sortKey,
      sortDir,
      onSort: handleSort,
      allPageSelected,
      somePageSelected,
      onSelectAll: handleSelectAll,
    },
    bodyProps: {
      view,
      loading,
      rows: rendered,
      winStart,
      topSpacerH,
      bottomSpacerH,
      empty: paginated.length === 0,
      colCount,
      scrollable: !!scrollable,
      emptyContent,
    },
    footerProps: {
      hasPagination,
      page: clampedPage,
      totalPages,
      totalItems: sorted.length,
      startRecord,
      endRecord,
      onPageChange: setPage,
      colorScheme,
      showCount: !!scrollable && !loading && sorted.length > 0,
      count: sorted.length,
    },
    onScroll,
  }
}
