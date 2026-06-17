import { ChevronLeftIcon, ChevronRightIcon } from '../lib/Icons'
import type { ColorScheme } from '../lib/types'

export type PaginationProps = {
  page: number
  totalPages: number
  totalItems: number
  startRecord: number
  endRecord: number
  onPageChange: (page: number) => void
  colorScheme?: ColorScheme
}

function getPageNumbers(page: number, totalPages: number): (number | 'dots')[] {
  const pages: (number | 'dots')[] = []
  if (totalPages <= 9) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (page > 4) pages.push('dots')
    const start = Math.max(2, page - 2)
    const end = Math.min(totalPages - 1, page + 2)
    for (let i = start; i <= end; i++) pages.push(i)
    if (page < totalPages - 3) pages.push('dots')
    pages.push(totalPages)
  }
  return pages
}

const activePage: Record<ColorScheme, string> = {
  primary: 'bg-primary text-primary-foreground shadow-sm',
  secondary: 'bg-secondary text-secondary-foreground shadow-sm',
  success: 'bg-success text-success-foreground shadow-sm',
  warning: 'bg-warning text-warning-foreground shadow-sm',
  danger: 'bg-danger text-danger-foreground shadow-sm',
  info: 'bg-info text-info-foreground shadow-sm',
}

export function Pagination({ page, totalPages, totalItems, startRecord, endRecord, onPageChange, colorScheme = 'primary' }: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
      <span className="text-sm text-muted-foreground">
        Mostrando {startRecord}-{endRecord} de {totalItems} resultados
      </span>
      <nav className="flex items-center gap-1">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        {getPageNumbers(page, totalPages).map((p, i) =>
          p === 'dots' ? (
            <span key={`dots-${i}`} className="px-2 text-sm text-muted-foreground">...</span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              className={[
                'inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors',
                p === page
                  ? activePage[colorScheme]
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              ].join(' ')}
            >
              {p}
            </button>
          )
        )}
        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className="inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </nav>
    </div>
  )
}
