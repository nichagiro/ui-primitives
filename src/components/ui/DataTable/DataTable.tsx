import { cn } from '../../../lib/cn'
import { useDataTable } from './useDataTable'
import { Toolbar } from './Toolbar'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'
import { TableFooter } from './TableFooter'
import type { DataTableProps } from './types'

export function DataTable<T extends Record<string, unknown>>(props: DataTableProps<T>) {
  const { toolbarProps, headerProps, bodyProps, footerProps, onScroll } = useDataTable(props)
  const { className, scrollable, scrollHeight } = props

  return (
    <div className={cn('space-y-4', className)}>
      <Toolbar {...toolbarProps} />
      <div
        data-testid={scrollable ? 'dt-scroll' : undefined}
        onScroll={onScroll}
        style={scrollable ? { maxHeight: scrollHeight ?? 384 } : undefined}
        className={cn('overflow-x-auto rounded-xl border border-border shadow-sm', scrollable ? 'overflow-y-auto' : '')}
      >
        <table className="w-full text-sm">
          <TableHeader {...headerProps} />
          <TableBody {...bodyProps} />
        </table>
      </div>
      <TableFooter {...footerProps} />
    </div>
  )
}
