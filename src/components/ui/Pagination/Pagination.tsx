import { ChevronLeftIcon, ChevronRightIcon } from '../../../lib/Icons'
import { getPageNumbers } from './helpers'
import { wrapperClass, infoClass, navClass, dotsClass, navButtonClass, pageButtonClass } from './styles'
import type { PaginationProps } from './types'

export function Pagination({ page, totalPages, totalItems, startRecord, endRecord, onPageChange, colorScheme = 'primary' }: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div className={wrapperClass}>
      <span className={infoClass}>
        Mostrando {startRecord}-{endRecord} de {totalItems} resultados
      </span>
      <nav className={navClass}>
        <button
          type="button"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className={navButtonClass}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        {getPageNumbers(page, totalPages).map((p, i) =>
          p === 'dots' ? (
            <span key={`dots-${i}`} className={dotsClass}>...</span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              className={pageButtonClass(colorScheme, p === page)}
            >
              {p}
            </button>
          )
        )}
        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className={navButtonClass}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </nav>
    </div>
  )
}
