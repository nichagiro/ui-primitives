import { Fragment } from 'react'
import { cn } from '../../../lib/cn'
import {
  getValue,
  getRowClass,
  getFixedCellClass,
  getDataCellClass,
  getExpandChevronClass,
  expandButtonClass,
  editButtonClass,
} from './helpers'
import { SelectionCell } from './SelectionCell'
import { CellEditor } from './CellEditor'
import { CheckIcon, ChevronRightIcon, PencilIcon } from '../../../lib/Icons'
import type { CellValue, TableView } from './types'

type TableRowProps<T> = {
  view: TableView<T>
  row: T
  idx: number
}

export function TableRow<T extends Record<string, unknown>>({ view, row, idx }: TableRowProps<T>) {
  const {
    columns,
    colorScheme,
    selection,
    hasExpandToggle,
    striped,
    stickyFirst,
    tdPadding,
    editTrigger,
    renderExpanded,
    hasRowInteraction,
    expandOnRowClickEff,
    editing,
    colCount,
    isSelected: checkSelected,
    isExpanded: checkExpanded,
    isDisabled,
    toggleSelection,
    toggleExpanded,
    startEdit,
    commitEdit,
    cancelEdit,
    onRowClick,
  } = view

  const key = view.keyExtractor(row)
  const isSelected = checkSelected(key)
  const isExpanded = checkExpanded(key)
  const disabled = isDisabled(key)
  const rowCls = view.rowClassName?.(row)

  return (
    <Fragment>
      <tr
        data-striped={striped ? (idx % 2 === 0 ? 'even' : 'odd') : undefined}
        aria-disabled={disabled ? true : undefined}
        onClick={disabled ? undefined : () => {
          if (selection !== 'none') toggleSelection(key)
          else if (expandOnRowClickEff) toggleExpanded(key)
          onRowClick?.(row)
        }}
        className={getRowClass({
          hasRowInteraction,
          disabled,
          isSelected,
          colorScheme,
          rowClassName: rowCls,
        })}
      >
        {hasExpandToggle && (
          <td className={getFixedCellClass(tdPadding, idx, isSelected, striped, colorScheme, rowCls)}>
            <button
              type="button"
              disabled={disabled}
              onClick={(e) => { e.stopPropagation(); toggleExpanded(key) }}
              className={expandButtonClass}
              aria-label={isExpanded ? 'Colapsar' : 'Expandir'}
              aria-expanded={isExpanded}
            >
              <ChevronRightIcon className={getExpandChevronClass(isExpanded)} />
            </button>
          </td>
        )}
        {selection !== 'none' && (
          <td className={getFixedCellClass(tdPadding, idx, isSelected, striped, colorScheme, rowCls)}>
            <SelectionCell
              mode={selection === 'multiple' ? 'checkbox' : 'radio'}
              isSelected={isSelected}
              colorScheme={colorScheme}
            />
          </td>
        )}
        {columns.map((col, i) => {
          const colKey = String(col.key ?? col.header)
          const canEdit = !!col.editable && !!col.key
          const isEditing =
            canEdit &&
            editing !== null &&
            editing.rowKey === key &&
            editing.colKey === colKey

          const showIcon = canEdit && editTrigger !== 'dblclick'
          const showDbl = canEdit && editTrigger !== 'icon'

          const cellContent = isEditing ? (
            <CellEditor
              editor={col.editable!}
              value={col.key ? (row[col.key] as CellValue) : ''}
              colorScheme={colorScheme}
              onCommit={(v) => commitEdit(row, col.key!, col.editable!, v)}
              onCancel={cancelEdit}
            />
          ) : (
            <div className={cn('flex items-center gap-1.5', canEdit && 'group/edit')}>
              <span className="min-w-0 flex-1">
                {col.editable?.type === 'check'
                  ? (row[col.key as keyof T] ? <CheckIcon className="h-4 w-4 text-success" /> : <span className="text-muted-foreground">—</span>)
                  : getValue(row, col)}
              </span>
              {showIcon && (
                <button
                  type="button"
                  disabled={disabled}
                  onClick={(e) => {
                    e.stopPropagation()
                    startEdit(key, colKey)
                  }}
                  className={editButtonClass}
                  aria-label={`Editar ${col.header}`}
                >
                  <PencilIcon className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          )

          return (
            <td
              key={colKey}
              onDoubleClick={
                showDbl && !disabled
                  ? (e) => {
                      e.stopPropagation()
                      startEdit(key, colKey)
                    }
                  : undefined
              }
              className={getDataCellClass({
                tdPadding,
                idx,
                isSelected,
                striped,
                colorScheme,
                sticky: stickyFirst && i === 0,
                colClassName: col.className,
                rowClassName: rowCls,
                isEditing,
              })}
            >
              {cellContent}
            </td>
          )
        })}
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan={colCount} className={cn(tdPadding, 'bg-card')}>
            {renderExpanded?.(row)}
          </td>
        </tr>
      )}
    </Fragment>
  )
}
