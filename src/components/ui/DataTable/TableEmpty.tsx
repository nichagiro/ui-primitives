import type { ReactNode } from 'react'
import { SearchIcon } from '../../../lib/Icons'

type TableEmptyProps = {
  colCount: number
  emptyContent?: ReactNode
}

export function TableEmpty({ colCount, emptyContent }: TableEmptyProps) {
  return (
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
}
