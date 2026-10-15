import { Pagination } from '../Pagination'
import type { ColorScheme } from '../../../types'

type TableFooterProps = {
  hasPagination: boolean
  page: number
  totalPages: number
  totalItems: number
  startRecord: number
  endRecord: number
  onPageChange: (page: number) => void
  colorScheme: ColorScheme
  showCount: boolean
  count: number
}

export function TableFooter({
  hasPagination,
  page,
  totalPages,
  totalItems,
  startRecord,
  endRecord,
  onPageChange,
  colorScheme,
  showCount,
  count,
}: TableFooterProps) {
  return (
    <>
      {hasPagination && (
        <Pagination
          page={page}
          totalPages={totalPages}
          totalItems={totalItems}
          startRecord={startRecord}
          endRecord={endRecord}
          onPageChange={onPageChange}
          colorScheme={colorScheme}
        />
      )}
      {showCount && (
        <div className="text-center text-sm text-muted-foreground">
          Mostrando {count} resultado{count !== 1 ? 's' : ''}
        </div>
      )}
    </>
  )
}
