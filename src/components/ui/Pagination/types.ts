import type { ColorScheme } from '../../../types'

export type PaginationProps = {
  page: number
  totalPages: number
  totalItems: number
  startRecord: number
  endRecord: number
  onPageChange: (page: number) => void
  colorScheme?: ColorScheme
}
