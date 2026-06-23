import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
  type Ref,
  type SelectHTMLAttributes,
  type ChangeEvent,
} from 'react'
import { FieldWrapper } from './FieldWrapper'
import { ChevronDown, Spinner, CheckIcon } from '../../lib/Icons'
import { assignRef } from '../../lib/assignRef'
import type { ColorScheme } from '../../types'

export type OptionValue = string | number

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'> & {
  ref?: Ref<HTMLSelectElement>
  label: string
  error?: string
  colorScheme?: ColorScheme
  isRequired?: boolean
  placeholder?: string
  multiple?: boolean
  selectAll?: boolean
  searchable?: boolean
  loading?: boolean
  defaultValue?: OptionValue | OptionValue[]
  value?: OptionValue | OptionValue[]
}

const focusRing: Record<ColorScheme, string> = {
  primary: 'focus:border-primary focus:ring-1 focus:ring-primary',
  secondary: 'focus:border-secondary focus:ring-1 focus:ring-secondary',
  success: 'focus:border-success focus:ring-1 focus:ring-success',
  warning: 'focus:border-warning focus:ring-1 focus:ring-warning',
  danger: 'focus:border-danger focus:ring-1 focus:ring-danger',
  info: 'focus:border-info focus:ring-1 focus:ring-info',
}

const checkboxSelected: Record<ColorScheme, string> = {
  primary: 'border-primary bg-primary text-primary-foreground',
  secondary: 'border-secondary bg-secondary text-secondary-foreground',
  success: 'border-success bg-success text-success-foreground',
  warning: 'border-warning bg-warning text-warning-foreground',
  danger: 'border-danger bg-danger text-danger-foreground',
  info: 'border-info bg-info text-info-foreground',
}

const optionSelected: Record<ColorScheme, string> = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/20 text-secondary-foreground',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  danger: 'bg-danger/10 text-danger',
  info: 'bg-info/10 text-info',
}

type SelectOptionsListProps = {
  loading: boolean
  filteredOptions: { value: OptionValue; label: ReactNode }[]
  showSelectAll: boolean
  filteredAllSelected: boolean
  highlightedIndex: number
  colorScheme: ColorScheme
  currentValues: OptionValue[]
  multiple: boolean
  searchQuery: string
  filteredAllValues: OptionValue[]
  onSelectAll: () => void
  onOptionClick: (value: OptionValue) => void
  onHighlight: (index: number) => void
}

function SelectOptionsList({
  loading,
  filteredOptions,
  showSelectAll,
  filteredAllSelected,
  highlightedIndex,
  colorScheme,
  currentValues,
  multiple,
  searchQuery,
  filteredAllValues,
  onSelectAll,
  onOptionClick,
  onHighlight,
}: SelectOptionsListProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-6">
        <Spinner className="mx-auto h-5 w-5 text-muted-foreground" />
      </div>
    )
  }

  if (filteredOptions.length === 0) {
    return (
      <p className="px-3 py-4 text-center text-sm text-muted-foreground">
        Sin resultados
      </p>
    )
  }

    return (
      <>
        {showSelectAll && (
          <div
            role="option"
            tabIndex={-1}
            aria-selected={filteredAllSelected}
            className={
              'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors text-foreground border-b border-border'
              + (highlightedIndex === 0 ? ' bg-muted' : '')
            }
            onClick={onSelectAll}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelectAll() }}
            onMouseEnter={() => onHighlight(0)}
          >
            <span className={'inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ' + (filteredAllSelected ? checkboxSelected[colorScheme] : 'border-border')}>
              <CheckIcon className={'h-3 w-3 transition-opacity ' + (filteredAllSelected ? 'opacity-100' : 'opacity-0')} />
            </span>
            {filteredAllSelected
              ? `Deseleccionar todos${searchQuery ? ` (${filteredAllValues.length} resultados)` : ''}`
              : `Seleccionar todos${searchQuery ? ` (${filteredAllValues.length} resultados)` : ''}`}
          </div>
        )}
        {filteredOptions.map((opt, i) => {
          const displayIndex = showSelectAll ? i + 1 : i
          const isSelected = currentValues.includes(opt.value)
          return (
            <div
              key={`${opt.value}-${i}`}
              role="option"
              tabIndex={-1}
              aria-selected={isSelected}
              className={
                'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors text-foreground '
                + (displayIndex === highlightedIndex ? ' bg-muted' : '')
                + (isSelected ? ' ' + optionSelected[colorScheme] : '')
              }
              onClick={() => onOptionClick(opt.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOptionClick(opt.value) }}
              onMouseEnter={() => onHighlight(displayIndex)}
            >
              {multiple && (
                <span className={'inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ' + (isSelected ? checkboxSelected[colorScheme] : 'border-border')}>
                  {isSelected && <CheckIcon className="h-3 w-3" />}
                </span>
              )}
              {opt.label}
            </div>
          )
        })}
      </>
    )
}

export function Select({ className, label, error, colorScheme = 'primary', isRequired, placeholder, multiple = false, selectAll, searchable, loading, children, onChange, disabled, defaultValue, value, name, id, ref }: SelectProps) {
    const [{ isOpen, highlightedIndex, searchQuery }, setDropdown] = useState({
      isOpen: false,
      highlightedIndex: -1,
      searchQuery: '',
    })
    const [internalValues, setInternalValues] = useState<OptionValue[]>(() => {
      const init = value !== undefined && value !== null ? value : defaultValue
      if (init !== undefined && init !== null) {
        if (multiple) return (Array.isArray(init) ? init : [init]) as OptionValue[]
        return [init] as OptionValue[]
      }
      return []
    })
    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const setInputRef = useCallback((el: HTMLInputElement | null) => {
      inputRef.current = el
      assignRef(ref, el as unknown as HTMLSelectElement | null)
    }, [ref])

    const normalizedValue: OptionValue[] | undefined = value !== undefined && value !== null
      ? multiple
        ? (Array.isArray(value) ? value : [value]) as OptionValue[]
        : [value] as OptionValue[]
      : undefined

    const currentValues = normalizedValue ?? internalValues

    const options = Children.toArray(children)
      .filter((child): child is ReactElement<{ value: string | number; children: ReactNode }> =>
        isValidElement(child) && child.type === 'option'
      )
      .map((child) => ({
        value: child.props.value as OptionValue,
        label: child.props.children,
      }))

    const filteredOptions = searchQuery
      ? options.filter(opt =>
          String(opt.label).toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : options

    const filteredAllValues = filteredOptions.map(o => o.value)
    const filteredAllSelected = filteredAllValues.length > 0 && filteredAllValues.every(v => currentValues.includes(v))
    const showSelectAll = !!(selectAll && multiple)
    const itemCount = filteredOptions.length + (showSelectAll ? 1 : 0)

    const selectedLabels = options.reduce<string[]>((acc, opt) => {
      if (currentValues.includes(opt.value)) acc.push(String(opt.label))
      return acc
    }, [])

    const SHOWN = 3
    const displayValue = selectedLabels.slice(0, SHOWN).join(', ')



    function emitChange(nextValues: OptionValue[]) {
      if (inputRef.current) inputRef.current.value = nextValues.join(',')
      const emit = { value: multiple ? nextValues : nextValues[0], name }
      onChange?.({
        target: emit as EventTarget & HTMLSelectElement,
        currentTarget: emit as EventTarget & HTMLSelectElement,
      } as React.ChangeEvent<HTMLSelectElement>)
    }

    function handleOptionClick(optValue: OptionValue) {
      const nextValues: OptionValue[] = multiple
        ? currentValues.includes(optValue)
          ? currentValues.filter((v) => v !== optValue)
          : [...currentValues, optValue]
        : [optValue]

      setInternalValues(nextValues)
      emitChange(nextValues)

      if (!multiple) {
        setDropdown({ isOpen: false, highlightedIndex: -1, searchQuery: '' })
      }
    }

    function handleSelectAll() {
      const nextValues = filteredAllSelected
        ? currentValues.filter((v) => !filteredAllValues.includes(v))
        : [...new Set([...currentValues, ...filteredAllValues])]

      setInternalValues(nextValues)
      emitChange(nextValues)
    }

    function handleKeyDown(e: React.KeyboardEvent) {
      if (!isOpen) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
          e.preventDefault()
          setDropdown({ isOpen: true, highlightedIndex: 0, searchQuery })
        }
        return
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setDropdown((prev) => ({ ...prev, highlightedIndex: prev.highlightedIndex < itemCount - 1 ? prev.highlightedIndex + 1 : prev.highlightedIndex }))
          break
        case 'ArrowUp':
          e.preventDefault()
          setDropdown((prev) => ({ ...prev, highlightedIndex: prev.highlightedIndex > 0 ? prev.highlightedIndex - 1 : 0 }))
          break
        case 'Enter':
        case ' ':
          e.preventDefault()
          if (highlightedIndex >= 0 && highlightedIndex < itemCount) {
            if (showSelectAll && highlightedIndex === 0) {
              handleSelectAll()
            } else {
              const optIndex = showSelectAll ? highlightedIndex - 1 : highlightedIndex
              handleOptionClick(filteredOptions[optIndex].value)
            }
          }
          break
        case 'Escape':
          e.preventDefault()
          setDropdown({ isOpen: false, highlightedIndex: -1, searchQuery: '' })
          break
      }
    }

    function handleSearchKeyDown(e: React.KeyboardEvent) {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setDropdown((prev) => ({ ...prev, highlightedIndex: prev.highlightedIndex < itemCount - 1 ? prev.highlightedIndex + 1 : 0 }))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setDropdown((prev) => ({ ...prev, highlightedIndex: prev.highlightedIndex > 0 ? prev.highlightedIndex - 1 : itemCount - 1 }))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < itemCount) {
          if (showSelectAll && highlightedIndex === 0) {
            handleSelectAll()
          } else {
            const optIndex = showSelectAll ? highlightedIndex - 1 : highlightedIndex
            handleOptionClick(filteredOptions[optIndex].value)
          }
        }
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setDropdown({ isOpen: false, highlightedIndex: -1, searchQuery: '' })
      }
    }

    useEffect(() => {
      if (!isOpen) return
      const handleClick = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setDropdown({ isOpen: false, highlightedIndex: -1, searchQuery: '' })
        }
      }
      document.addEventListener('mousedown', handleClick)
      return () => document.removeEventListener('mousedown', handleClick)
    }, [isOpen])

    useEffect(() => {
      if (!isOpen || highlightedIndex < 0) return
      const listbox = containerRef.current?.querySelector('[role="listbox"]')
      if (listbox) {
        const item = listbox.children[highlightedIndex] as HTMLElement | undefined
        item?.scrollIntoView({ block: 'nearest' })
      }
    }, [highlightedIndex, isOpen, showSelectAll, containerRef])

    useEffect(() => {
      const el = inputRef.current
      if (!el) return

      let currentValue = el.value

      Object.defineProperty(el, 'value', {
        get() {
          return currentValue
        },
        set(newVal) {
          currentValue = String(newVal)
          const vals = currentValue.split(',').filter(Boolean)
          if (vals.length > 0) {
            setInternalValues(vals.map((v) => {
              const num = Number(v)
              return Number.isNaN(num) ? v : num
            }) as OptionValue[])
          }
        },
        configurable: true,
        enumerable: true,
      })

    }, [])

    const generatedId = useId()
    const selectId = id || generatedId

    return (
      <FieldWrapper label={label} error={error} colorScheme={colorScheme} htmlFor={selectId} isRequired={isRequired}>
        <div className="relative" ref={containerRef}>
          <input
            ref={setInputRef}
            type="hidden"
            name={name}
          />
          <button
            type="button"
            disabled={disabled}
            id={selectId}
            onClick={() => {
              if (!disabled) {
                if (isOpen) {
                  setDropdown({ isOpen: false, highlightedIndex: -1, searchQuery: '' })
                } else {
                  setDropdown((prev) => ({ ...prev, isOpen: true }))
                }
              }
            }}
            onKeyDown={handleKeyDown}
            className={[
              'flex w-full items-center justify-between gap-2 text-sm outline-none select-none pb-2',
              'disabled:cursor-not-allowed',
              className ?? '',
            ].join(' ')}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={isOpen ? `${selectId}-listbox` : undefined}
          >
            <span
              className={`truncate ${currentValues.length > 0 ? 'text-foreground' : 'text-muted-foreground'}`}
              title={selectedLabels.join(', ')}
            >
              {currentValues.length > 0
                ? displayValue + (selectedLabels.length > SHOWN ? ` +${selectedLabels.length - SHOWN} más` : '')
                : placeholder}
            </span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isOpen && (
            <div
              id={`${selectId}-listbox`}
              role="listbox"
              className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-auto rounded-md border border-border bg-card shadow-lg"
            >
              {searchable && (
                <div className="sticky top-0 border-b border-border bg-card p-2">
                  <input
                    ref={(el) => { if (el) el.focus() }}
                    type="text"
                    value={searchQuery}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setDropdown((prev) => ({ ...prev, searchQuery: e.target.value, highlightedIndex: -1 }))
                    }}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Buscar..."
                    aria-label="Buscar"
                    className={'w-full rounded-md border border-border bg-background px-2 py-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground ' + focusRing[colorScheme]}
                  />
                </div>
              )}
              <SelectOptionsList
                loading={!!loading}
                filteredOptions={filteredOptions}
                showSelectAll={showSelectAll}
                filteredAllSelected={filteredAllSelected}
                highlightedIndex={highlightedIndex}
                colorScheme={colorScheme}
                currentValues={currentValues}
                multiple={multiple}
                searchQuery={searchQuery}
                filteredAllValues={filteredAllValues}
                onSelectAll={handleSelectAll}
                onOptionClick={handleOptionClick}
                onHighlight={(index) => setDropdown((prev) => ({ ...prev, highlightedIndex: index }))}
              />
            </div>
          )}
        </div>
      </FieldWrapper>
    )
}
