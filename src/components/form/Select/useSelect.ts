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
  type ChangeEvent,
} from 'react'
import { assignRef } from '../../../lib/assignRef'
import { calcDropdownPosition } from './helpers'
import type { OptionValue, SelectProps } from './types'

const SHOWN = 3

export type UseSelectReturn = ReturnType<typeof useSelect>

export function useSelect(props: SelectProps) {
  const {
    children,
    multiple = false,
    selectAll,
    searchable,
    loading,
    onChange,
    disabled,
    defaultValue,
    value,
    name,
    ref,
  } = props

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
  const listboxRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const mouseHighlightRef = useRef(false)
  const isEmittingRef = useRef(false)
  const [portalTarget, setPortalTarget] = useState<Element>(document.body)
  const [dropdownPos, setDropdownPos] = useState<{ top: number | string; bottom: number | string; left: number; width: number; maxHeight: number } | null>(null)

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
  const filteredAllSelected = filteredAllValues.length > 0 && filteredAllValues.every(v => currentValues.some(cv => String(cv) === String(v)))
  const showSelectAll = !!(selectAll && multiple)
  const itemCount = filteredOptions.length + (showSelectAll ? 1 : 0)

  const selectedLabels = options.reduce<string[]>((acc, opt) => {
    if (currentValues.some(cv => String(cv) === String(opt.value))) acc.push(String(opt.label))
    return acc
  }, [])

  const displayValue = selectedLabels.slice(0, SHOWN).join(', ')

  function emitChange(nextValues: OptionValue[]) {
    isEmittingRef.current = true
    if (inputRef.current) inputRef.current.value = nextValues.join(',')
    isEmittingRef.current = false
    const emit = { value: multiple ? nextValues : nextValues[0], name }
    onChange?.({
      target: emit as EventTarget & HTMLSelectElement,
      currentTarget: emit as EventTarget & HTMLSelectElement,
    } as ChangeEvent<HTMLSelectElement>)
  }

  function handleOptionClick(optValue: OptionValue) {
    const isSelected = currentValues.some(v => String(v) === String(optValue))
    const nextValues: OptionValue[] = multiple
      ? isSelected
        ? currentValues.filter((v) => String(v) !== String(optValue))
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
      ? currentValues.filter((v) => !filteredAllValues.some(fv => String(fv) === String(v)))
      : [...new Set([...currentValues, ...filteredAllValues])]

    setInternalValues(nextValues)
    emitChange(nextValues)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault()
        setPortalTarget(containerRef.current?.closest('dialog, [role="dialog"], [aria-modal="true"]') ?? document.body)
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

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setDropdown((prev) => ({ ...prev, searchQuery: e.target.value, highlightedIndex: -1 }))
  }

  function handleHighlight(index: number) {
    mouseHighlightRef.current = true
    setDropdown((prev) => ({ ...prev, highlightedIndex: index }))
  }

  function onTriggerClick() {
    if (!disabled) {
      if (isOpen) {
        setDropdown({ isOpen: false, highlightedIndex: -1, searchQuery: '' })
      } else {
        setPortalTarget(containerRef.current?.closest('dialog, [role="dialog"], [aria-modal="true"]') ?? document.body)
        setDropdownPos(calcDropdownPosition(containerRef.current))
        setDropdown((prev) => ({ ...prev, isOpen: true }))
      }
    }
  }

  useEffect(() => {
    if (!isOpen) return
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node
      const inside = containerRef.current?.contains(target) || listboxRef.current?.contains(target)
      if (!inside) {
        setDropdown({ isOpen: false, highlightedIndex: -1, searchQuery: '' })
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleReposition = () => {
      setDropdownPos(calcDropdownPosition(containerRef.current))
    }

    window.addEventListener('scroll', handleReposition, { capture: true })
    window.addEventListener('resize', handleReposition)

    return () => {
      window.removeEventListener('scroll', handleReposition, { capture: true })
      window.removeEventListener('resize', handleReposition)
    }
  }, [isOpen])

  useEffect(() => {
    const dialog = portalTarget instanceof HTMLDialogElement ? portalTarget : null
    if (!isOpen || !dialog) return

    const handleClose = () => {
      setDropdown({ isOpen: false, highlightedIndex: -1, searchQuery: '' })
    }

    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [isOpen, portalTarget])

  useEffect(() => {
    if (!isOpen || highlightedIndex < 0) return
    if (mouseHighlightRef.current) { mouseHighlightRef.current = false; return }
    const listbox = listboxRef.current
    if (!listbox) return
    const item = listbox.children[highlightedIndex] as HTMLElement | undefined
    if (!item) return
    const itemTop = item.offsetTop
    const itemBottom = itemTop + item.offsetHeight
    const viewTop = listbox.scrollTop
    const viewBottom = viewTop + listbox.clientHeight
    if (itemTop < viewTop) {
      listbox.scrollTop = itemTop
    } else if (itemBottom > viewBottom) {
      listbox.scrollTop = itemBottom - listbox.clientHeight
    }
  }, [highlightedIndex, isOpen, showSelectAll, listboxRef])

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
        if (isEmittingRef.current) return
        const vals = currentValue.split(',').filter(Boolean)
        if (vals.length > 0) {
          setInternalValues(vals as OptionValue[])
        }
      },
      configurable: true,
      enumerable: true,
    })

    if (currentValue) {
      const vals = currentValue.split(',').filter(Boolean)
      if (vals.length > 0) {
        setInternalValues(vals as OptionValue[])
      }
    }
  }, [])

  const generatedId = useId()
  const selectId = props.id || generatedId

  return {
    isOpen,
    searchQuery,
    highlightedIndex,
    currentValues,
    displayValue,
    selectedLabels,
    filteredOptions,
    filteredAllSelected,
    filteredAllValues,
    itemCount,
    showSelectAll,
    loading: !!loading,
    multiple: !!multiple,
    searchable: !!searchable,
    disabled: !!disabled,
    colorScheme: props.colorScheme ?? 'primary',
    selectId,
    containerRef,
    listboxRef,
    setInputRef,
    dropdownPos,
    portalTarget,
    onTriggerClick,
    handleKeyDown,
    handleSearchKeyDown,
    handleSearchChange,
    handleOptionClick,
    handleSelectAll,
    handleHighlight,
  }
}
