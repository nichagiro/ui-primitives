import { Fragment } from 'react'
import { TableRow } from './TableRow'
import { TableSkeleton } from './TableSkeleton'
import { TableEmpty } from './TableEmpty'
import type { ReactNode } from 'react'
import type { TableView } from './types'

type TableBodyProps<T> = {
  view: TableView<T>
  loading: boolean
  rows: T[]
  winStart: number
  topSpacerH: number
  bottomSpacerH: number
  empty: boolean
  colCount: number
  scrollable: boolean
  emptyContent?: ReactNode
}

export function TableBody<T extends Record<string, unknown>>({
  view,
  loading,
  rows,
  winStart,
  topSpacerH,
  bottomSpacerH,
  empty,
  colCount,
  scrollable,
  emptyContent,
}: TableBodyProps<T>) {
  return (
    <tbody className="divide-y divide-border">
      {loading ? (
        <TableSkeleton
          columns={view.columns}
          selection={view.selection}
          striped={view.striped}
          colorScheme={view.colorScheme}
          tdPadding={view.tdPadding}
        />
      ) : empty ? (
        <TableEmpty colCount={colCount} emptyContent={emptyContent} />
      ) : (
        <Fragment>
          {scrollable && topSpacerH > 0 && (
            <tr aria-hidden="true"><td colSpan={colCount} style={{ height: topSpacerH }} /></tr>
          )}
          {rows.map((row, i) => (
            <TableRow key={view.keyExtractor(row)} view={view} row={row} idx={winStart + i} />
          ))}
          {scrollable && bottomSpacerH > 0 && (
            <tr aria-hidden="true"><td colSpan={colCount} style={{ height: bottomSpacerH }} /></tr>
          )}
        </Fragment>
      )}
    </tbody>
  )
}
