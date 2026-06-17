import { useState, useMemo } from 'react'
import { cn } from './helpers'
import { getValue, getRowBg } from './helpers'
import { type DataTableProps } from './types'
import { SelectionCell } from './SelectionCell'
import { SortIcon } from './SortIcon'
import { Toolbar } from './Toolbar'
import { Pagination } from '../Pagination'
import { CheckIcon, MinusIcon, SearchIcon } from '../../lib/Icons'
import type { ColorScheme } from '../../lib/types'

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
  searchPlaceholder = 'Buscar...',
  selection = 'none',
  selected: controlledSelected,
  onSelectionChange,
  card = false,
  loading = false,
  density = 'default',
  stickyFirst = false,
  stickySelection = false,
  striped = false,
  scrollable,
  emptyContent,
  onRowClick,
}: DataTableProps<T>) {
  const colorScheme: ColorScheme = outerColorScheme ?? 'primary'
  const [sortKey, setSortKey] = useState<number | null>(null)
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(defaultPageSize)
  const [internalSelected, setInternalSelected] = useState<(string | number)[]>(controlledSelected ?? [])

  const effectiveSelected = controlledSelected ?? internalSelected

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

  function handleSelectAll() {
    const pageKeys = paginated.map((row) => keyExtractor(row))
    const allSelected = pageKeys.every((k) => effectiveSelected.includes(k))
    let newSelected: (string | number)[]
    if (allSelected) {
      newSelected = effectiveSelected.filter((k) => !pageKeys.includes(k))
    } else {
      newSelected = [...effectiveSelected]
      for (const k of pageKeys) {
        if (!newSelected.includes(k)) newSelected.push(k)
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
    return [...filtered].sort((a, b) => {
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
  const hasRowInteraction = selection !== 'none' || !!onRowClick
  const thPadding = density === 'compact' ? 'px-3 py-2' : 'px-4 py-3.5'
  const tdPadding = density === 'compact' ? 'px-3 py-1.5' : 'px-4 py-3'

  const colCount = columns.length + (selection !== 'none' ? 1 : 0)

  const scrollableClass = scrollable
    ? `${typeof scrollable === 'string' ? `max-h-[${scrollable}]` : 'max-h-96'} overflow-y-auto`
    : ''

  const skeletonRows = Array.from({ length: 8 }, (_, idx) => (
    <tr key={`skeleton-${idx}`} className={getRowBg(idx, false, striped)}>
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
    <div className={cn('overflow-x-auto rounded-xl border border-border', card && 'bg-card shadow-md', scrollableClass)}>
      <table className="w-full text-sm">
        <thead className="sticky top-0 z-30">
          <tr className="border-b border-border">
            {selection !== 'none' && (
              <th className={cn(thPadding, 'w-10 text-center bg-muted', stickySelection && 'sticky left-0 z-20')}>
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
                key={`th-${i}`}
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
              return (
                <tr
                  key={key}
                  onClick={() => {
                    if (selection !== 'none') toggleSelection(key)
                    onRowClick?.(row)
                  }}
                  className={cn(
                    'transition-colors',
                    hasRowInteraction && 'hover:brightness-95',
                    isSelected && 'text-primary',
                    hasRowInteraction && 'cursor-pointer',
                  )}
                >
                  {selection !== 'none' && (
                    <td className={cn(tdPadding, 'w-10 text-center', getRowBg(idx, isSelected, striped), stickySelection && 'sticky left-0 z-10')}>
                      <SelectionCell
                        mode={selection === 'multiple' ? 'checkbox' : 'radio'}
                        isSelected={isSelected}
                        colorScheme={colorScheme}
                      />
                    </td>
                  )}
                  {columns.map((col, i) => (
                    <td
                      key={`td-${i}`}
                      className={cn(
                        tdPadding,
                        getRowBg(idx, isSelected, striped),
                        stickyFirst && i === 0 && 'sticky left-0 z-10',
                        col.className,
                      )}
                    >
                      {getValue(row, col)}
                    </td>
                  ))}
                </tr>
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
        showPageSize={!scrollable}
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
