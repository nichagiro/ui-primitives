import { useState, useMemo, Fragment } from 'react'
import { cn, getValue, getRowBg } from './helpers'
import { type DataTableProps, type Column, type CellValue } from './types'
import { SelectionCell } from './SelectionCell'
import { SortIcon } from './SortIcon'
import { Toolbar } from './Toolbar'
import { Pagination } from '../Pagination'
import { CheckIcon, MinusIcon, SearchIcon, ChevronRightIcon, PencilIcon } from '../../../lib/Icons'
import { CellEditor } from './CellEditor'

import type { ColorScheme } from '../../../types'
const selectedText: Record<ColorScheme, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
}

const selectAllCls: Record<ColorScheme, string> = {
  primary: 'border-primary bg-primary text-primary-foreground',
  secondary: 'border-secondary bg-secondary text-secondary-foreground',
  success: 'border-success bg-success text-success-foreground',
  warning: 'border-warning bg-warning text-warning-foreground',
  danger: 'border-danger bg-danger text-danger-foreground',
  info: 'border-info bg-info text-info-foreground',
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  keyExtractor,
  className,
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
  emptyContent,
  onRowClick,
  renderExpanded,
  expandOnRowClick,
  rowClassName,
  expanded: controlledExpanded,
  onExpandedChange,
  editTrigger = 'both',
  onCellEdit,
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

  const effectiveSelected = controlledSelected ?? internalSelected
  const effectiveExpanded = controlledExpanded ?? internalExpanded

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
    const newExpanded = effectiveExpanded.includes(key)
      ? effectiveExpanded.filter((k) => k !== key)
      : [...effectiveExpanded, key]
    if (controlledExpanded === undefined) setInternalExpanded(newExpanded)
    onExpandedChange?.(newExpanded)
  }

  function startEdit(rowKey: string | number, colKey: string) {
    setEditing({ rowKey, colKey })
  }

  function cancelEdit() {
    setEditing(null)
  }

  function commitEdit(row: T, colKey: keyof T, editor: NonNullable<Column<T>['editable']>, raw: CellValue) {
    const rowKey = keyExtractor(row)
    let value: CellValue = raw
    if (editor.type === 'input' && editor.inputType === 'number') {
      const num = Number(raw)
      value = raw === '' || Number.isNaN(num) ? raw : num
    }
    const updatedRow = { ...row, [colKey]: value } as T
    onCellEdit?.({ row, rowKey, columnKey: colKey, value, updatedRow })
    setEditing(null)
  }

  function handleSelectAll() {
    const pageKeySet = new Set(paginated.map((row) => keyExtractor(row)))
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

  const startRecord = sorted.length === 0 ? 0 : (clampedPage - 1) * pageSize + 1
  const endRecord = Math.min(clampedPage * pageSize, sorted.length)

  const pageKeys = paginated.map((row) => keyExtractor(row))
  const allPageSelected = pageKeys.every((k) => effectiveSelected.includes(k))
  const somePageSelected = pageKeys.some((k) => effectiveSelected.includes(k))

  const hasPagination = !loading && totalPages > 1 && !scrollable
  const hasExpandToggle = !!renderExpanded
  const expandOnRowClickEff = hasExpandToggle && (expandOnRowClick ?? selection === 'none')
  const hasRowInteraction = selection !== 'none' || !!onRowClick || expandOnRowClickEff
  const thPadding = density === 'compact' ? 'px-3 py-2' : 'px-4 py-3.5'
  const tdPadding = density === 'compact' ? 'px-3 py-1.5' : 'px-4 py-3'

  const colCount = columns.length + (selection !== 'none' ? 1 : 0) + (hasExpandToggle ? 1 : 0)

  const scrollableClass = scrollable
    ? `${typeof scrollable === 'string' ? `max-h-[${scrollable}]` : 'max-h-96'} overflow-y-auto`
    : ''

  const skeletonRows = Array.from({ length: 8 }, (_, idx) => (
    <tr key={`skeleton-${idx}`} className={getRowBg(idx, false, striped, colorScheme)}>
      {selection !== 'none' && <td className={tdPadding} />}
      {columns.map((_, i) => (
        <td key={`sk-${i}`} className={tdPadding}>
          <div className="h-4 w-full animate-pulse rounded bg-muted-foreground/20" />
        </td>
      ))}
    </tr>
  ))

  const emptyRow = (
    <tr>
      <td colSpan={colCount} className="px-4 py-12 text-center text-muted-foreground">
        {emptyContent ?? (
          <div className="flex flex-col items-center gap-1">
            <SearchIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Sin resultados</span>
            <span className="text-xs">No se encontraron datos para esta búsqueda</span>
          </div>
        )}
      </td>
    </tr>
  )

  const table = (
    <div className={cn('overflow-x-auto rounded-xl border border-border shadow-sm', scrollableClass)}>
      <table className="w-full text-sm">
        <thead className="sticky top-0 z-30">
          <tr className="border-b border-border">
            {hasExpandToggle && <th className={cn(thPadding, 'w-10 bg-muted')} />}
            {selection !== 'none' && (
              <th className={cn(thPadding, 'w-10 text-center bg-muted')}>
                {selection === 'multiple' && (
                  <button
                    type="button"
                    onClick={handleSelectAll}
                    className={cn(
                      'mx-auto flex h-4 w-4 items-center justify-center rounded border transition-colors',
                      (allPageSelected || somePageSelected)
                        ? selectAllCls[colorScheme]
                        : 'border-muted-foreground/40 hover:border-muted-foreground/60',
                    )}
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
                className={cn(
                  thPadding,
                  'bg-muted text-left text-xs font-bold uppercase tracking-wider text-muted-foreground',
                  col.sortable && 'cursor-pointer select-none hover:text-foreground',
                  stickyFirst && i === 0 && 'sticky left-0 z-20',
                  col.className,
                )}
                onClick={() => handleSort(i)}
              >
                <span className="inline-flex items-center gap-1.5">
                  {col.header}
                  {col.sortable && <SortIcon active={sortKey === i} direction={sortDir} />}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {loading ? skeletonRows : paginated.length === 0 ? emptyRow : (
            paginated.map((row, idx) => {
              const key = keyExtractor(row)
              const isSelected = effectiveSelected.includes(key)
              const isExpanded = effectiveExpanded.includes(key)
              return (
                <Fragment key={key}>
                <tr
                  data-striped={striped ? (idx % 2 === 0 ? 'even' : 'odd') : undefined}
                  onClick={() => {
                    if (selection !== 'none') toggleSelection(key)
                    else if (expandOnRowClickEff) toggleExpanded(key)
                    onRowClick?.(row)
                  }}
                  className={cn(
                    'transition-colors',
                    hasRowInteraction && 'hover:brightness-95',
                    isSelected && selectedText[colorScheme],
                    hasRowInteraction && 'cursor-pointer',
                    rowClassName?.(row),
                  )}
                >
                  {hasExpandToggle && (
                    <td className={cn(tdPadding, 'w-10 text-center', getRowBg(idx, isSelected, striped, colorScheme), rowClassName?.(row))}>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); toggleExpanded(key) }}
                        className="flex w-full items-center justify-center py-1 text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={isExpanded ? 'Colapsar' : 'Expandir'}
                        aria-expanded={isExpanded}
                      >
                        <ChevronRightIcon className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                    </td>
                  )}
                  {selection !== 'none' && (
                    <td className={cn(tdPadding, 'w-10 text-center', getRowBg(idx, isSelected, striped, colorScheme), rowClassName?.(row))}>
                      <SelectionCell
                        mode={selection === 'multiple' ? 'checkbox' : 'radio'}
                        isSelected={isSelected}
                        colorScheme={colorScheme}
                      />
                    </td>
                  )}
                  {columns.map((col, i) => {
                    const colKey = String(col.key ?? col.header)
                    const canEdit = !!col.editable && !!col.key
                    const isEditing =
                      canEdit &&
                      editing !== null &&
                      editing.rowKey === key &&
                      editing.colKey === colKey

                    const showIcon = canEdit && editTrigger !== 'dblclick'
                    const showDbl = canEdit && editTrigger !== 'icon'

                    const cellContent = isEditing ? (
                      <CellEditor
                        editor={col.editable!}
                        value={col.key ? (row[col.key] as CellValue) : ''}
                        colorScheme={colorScheme}
                        onCommit={(v) => commitEdit(row, col.key!, col.editable!, v)}
                        onCancel={cancelEdit}
                      />
                    ) : (
                      <div className={cn('flex items-center gap-1.5', canEdit && 'group/edit')}>
                        <span className="min-w-0 flex-1">
                          {col.editable?.type === 'check'
                            ? (row[col.key as keyof T] ? <CheckIcon className="h-4 w-4 text-success" /> : <span className="text-muted-foreground">—</span>)
                            : getValue(row, col)}
                        </span>
                        {showIcon && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              startEdit(key, colKey)
                            }}
                            className="ml-auto inline-flex h-5 w-5 shrink-0 items-center justify-center rounded text-muted-foreground opacity-0 transition-opacity hover:text-foreground focus-visible:opacity-100 group-hover/edit:opacity-100"
                            aria-label={`Editar ${col.header}`}
                          >
                            <PencilIcon className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    )

                    return (
                      <td
                        key={colKey}
                        onDoubleClick={
                          showDbl
                            ? (e) => {
                                e.stopPropagation()
                                startEdit(key, colKey)
                              }
                            : undefined
                        }
                        className={cn(
                          tdPadding,
                          getRowBg(idx, isSelected, striped, colorScheme),
                          stickyFirst && i === 0 && 'sticky left-0 z-10',
                          col.className,
                          rowClassName?.(row),
                          isEditing && 'p-0',
                        )}
                      >
                        {cellContent}
                      </td>
                    )
                  })}
                </tr>
                {isExpanded && (
                  <tr key={`${key}-expanded`}>
                    <td colSpan={colCount} className={cn(tdPadding, 'bg-card')}>
                      {renderExpanded?.(row)}
                    </td>
                  </tr>
                )}
                </Fragment>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )

  const pagination = (
    <Pagination
      page={clampedPage}
      totalPages={totalPages}
      totalItems={sorted.length}
      startRecord={startRecord}
      endRecord={endRecord}
      onPageChange={setPage}
      colorScheme={colorScheme}
    />
  )

  return (
    <div className={cn('space-y-4', className)}>
      <Toolbar
        searchable={searchable}
        search={search}
        searchPlaceholder={searchPlaceholder}
        onSearchChange={(v) => { setSearch(v); setPage(1) }}
        showPageSize={showPageSizeProp ?? !scrollable}
        pageSize={pageSize}
        onPageSizeChange={(n) => { setPageSize(n); setPage(1) }}
        colorScheme={colorScheme}
      />
      {table}
      {hasPagination && pagination}
      {scrollable && !loading && sorted.length > 0 && (
        <div className="text-center text-sm text-muted-foreground">
          Mostrando {sorted.length} resultado{sorted.length !== 1 ? 's' : ''}
        </div>
      )}
    </div>
  )
}
