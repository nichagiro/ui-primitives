import { getRowBg } from './helpers'
import type { Column, SelectionMode } from './types'
import type { ColorScheme } from '../../../types'

type TableSkeletonProps<T> = {
  columns: Column<T>[]
  selection: SelectionMode
  striped: boolean
  colorScheme: ColorScheme
  tdPadding: string
}

export function TableSkeleton<T extends Record<string, unknown>>({
  columns,
  selection,
  striped,
  colorScheme,
  tdPadding,
}: TableSkeletonProps<T>) {
  return (
    <>
      {Array.from({ length: 8 }, (_, idx) => (
        <tr key={`skeleton-${idx}`} className={getRowBg(idx, false, striped, colorScheme)}>
          {selection !== 'none' && <td className={tdPadding} />}
          {columns.map((_, i) => (
            <td key={`sk-${i}`} className={tdPadding}>
              <div className="h-4 w-full animate-pulse rounded bg-muted-foreground/20" />
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}
