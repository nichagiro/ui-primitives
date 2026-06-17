import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
  type SelectHTMLAttributes,
  type ChangeEvent,
} from 'react'
import { FieldWrapper } from './FieldWrapper'
import { ChevronDown, Spinner } from '../lib/Icons'
import { assignRef } from '../lib/assignRef'

export type OptionValue = string | number

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'> & {
  label: string
  required?: boolean
  error?: string
  placeholder?: string
  multiple?: boolean
  selectAll?: boolean
  searchable?: boolean
  loading?: boolean
  defaultValue?: OptionValue | OptionValue[]
  value?: OptionValue | OptionValue[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, required, error, placeholder, multiple = false, selectAll, searchable, loading, children, onChange, disabled, defaultValue, value, name, id }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const [searchQuery, setSearchQuery] = useState('')
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
    const searchRef = useRef<HTMLInputElement>(null)

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

    const selectedLabels = options
      .filter((opt) => currentValues.includes(opt.value))
      .map((opt) => opt.label)

    const SHOWN = 3
    const displayValue = selectedLabels.slice(0, SHOWN).join(', ')

    useEffect(() => {
      if (isOpen && searchable) {
        searchRef.current?.focus()
      }
    }, [isOpen, searchable])

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
        setIsOpen(false)
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
          setIsOpen(true)
          setHighlightedIndex(0)
        }
        return
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setHighlightedIndex((prev) => (prev < itemCount - 1 ? prev + 1 : prev))
          break
        case 'ArrowUp':
          e.preventDefault()
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0))
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
          setSearchQuery('')
          setHighlightedIndex(-1)
          setIsOpen(false)
          break
      }
    }

    function handleSearchKeyDown(e: React.KeyboardEvent) {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setHighlightedIndex((prev) => (prev < itemCount - 1 ? prev + 1 : 0))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : itemCount - 1))
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
        setIsOpen(false)
      }
    }

    useEffect(() => {
      if (!isOpen) return
      const handleClick = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setSearchQuery('')
          setHighlightedIndex(-1)
          setIsOpen(false)
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

      if (currentValue) {
        const vals = currentValue.split(',').filter(Boolean)
        if (vals.length > 0) {
          setInternalValues(vals.map((v) => {
            const num = Number(v)
            return Number.isNaN(num) ? v : num
          }) as OptionValue[])
        }
      }
    }, [])

    const generatedId = useId()
    const selectId = id || generatedId

    return (
      <FieldWrapper label={label} required={required} error={error} htmlFor={selectId}>
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
                  setSearchQuery('')
                  setHighlightedIndex(-1)
                }
                setIsOpen(!isOpen)
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
              aria-multiselectable={multiple || undefined}
              className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-auto rounded-md border border-border bg-card shadow-lg"
            >
              {searchable && (
                <div className="sticky top-0 border-b border-border bg-card p-2">
                  <input
                    ref={searchRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setSearchQuery(e.target.value)
                      setHighlightedIndex(-1)
                    }}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Buscar..."
                    className="w-full rounded-md border border-border bg-background px-2 py-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              )}

              {loading ? (
                <div className="flex items-center justify-center py-6">
                  <Spinner className="mx-auto h-5 w-5 text-muted-foreground" />
                </div>
              ) : filteredOptions.length === 0 ? (
                <p className="px-3 py-4 text-center text-sm text-muted-foreground">
                  Sin resultados
                </p>
              ) : (
                <>
                  {showSelectAll && (
                    <div
                      role="option"
                      aria-selected={filteredAllSelected}
                      className={
                        'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors text-foreground border-b border-border'
                        + (highlightedIndex === 0 ? ' bg-muted' : '')
                      }
                      onClick={handleSelectAll}
                      onMouseEnter={() => setHighlightedIndex(0)}
                    >
                      <span className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${filteredAllSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-border'}`}>
                        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: filteredAllSelected ? 1 : 0 }}>
                          <path d="M2.5 6l2.5 2.5 4.5-4.5" />
                        </svg>
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
                        aria-selected={isSelected}
                        className={
                          'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors text-foreground '
                          + (displayIndex === highlightedIndex ? ' bg-muted' : '')
                          + (isSelected ? ' bg-primary/10 text-primary' : '')
                        }
                        onClick={() => handleOptionClick(opt.value)}
                        onMouseEnter={() => setHighlightedIndex(displayIndex)}
                      >
                        {multiple && (
                          <span className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-border'}`}>
                            {isSelected && (
                              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2.5 6l2.5 2.5 4.5-4.5" />
                              </svg>
                            )}
                          </span>
                        )}
                        {opt.label}
                      </div>
                    )
                  })}
                </>
              )}
            </div>
          )}
        </div>
      </FieldWrapper>
    )
  },
)

Select.displayName = 'Select'
