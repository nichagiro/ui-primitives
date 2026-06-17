import { SearchIcon } from '../../lib/Icons'

type ToolbarProps = {
  searchable: boolean
  search: string
  searchPlaceholder: string
  onSearchChange: (value: string) => void
  showPageSize: boolean
  pageSize: number
  onPageSizeChange: (size: number) => void
}

export function Toolbar({
  searchable,
  search,
  searchPlaceholder,
  onSearchChange,
  showPageSize,
  pageSize,
  onPageSizeChange,
}: ToolbarProps) {
  const pageSizeSelect = (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span>Mostrar</span>
      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        className="rounded-lg border border-border bg-card px-2 py-1.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      >
        {[10, 20, 50, 100].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <span>por página</span>
    </div>
  )

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative max-w-xs">
        {searchable && (
          <>
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </>
        )}
      </div>
      {showPageSize && (
        <div className="flex items-center gap-3">
          {pageSizeSelect}
        </div>
      )}
    </div>
  )
}
