import { createPortal } from 'react-dom'
import { FieldWrapper } from '../FieldWrapper'
import { ChevronDown } from '../../../lib/Icons'
import { cn } from '../../../lib/cn'
import { triggerBaseClass, triggerValueClass, chevronClass, listboxClass, searchWrapperClass, searchInputClass } from './styles'
import type { SelectProps } from './types'
import { SelectOptionsList } from './SelectOptionsList'
import { useSelect } from './useSelect'

const SHOWN_DISPLAY = 3

export function Select(props: SelectProps) {
  const {
    className,
    label,
    error,
    isRequired,
    placeholder,
  } = props

  const state = useSelect(props)

  const {
    isOpen,
    searchQuery,
    highlightedIndex,
    currentValues,
    displayValue,
    selectedLabels,
    filteredOptions,
    filteredAllSelected,
    filteredAllValues,
    showSelectAll,
    loading,
    multiple,
    searchable,
    disabled,
    colorScheme,
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
  } = state

  return (
    <FieldWrapper label={label} error={error} colorScheme={colorScheme} htmlFor={selectId} isRequired={isRequired}>
      <div className="relative" ref={containerRef}>
        <input
          ref={setInputRef}
          type="hidden"
          name={props.name}
        />
        <button
          type="button"
          disabled={disabled}
          id={selectId}
          onClick={onTriggerClick}
          onKeyDown={handleKeyDown}
          className={cn(triggerBaseClass, className)}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={isOpen ? `${selectId}-listbox` : undefined}
        >
          <span
            className={triggerValueClass(currentValues.length > 0)}
            title={selectedLabels.join(', ')}
          >
            {currentValues.length > 0
              ? displayValue + (selectedLabels.length > SHOWN_DISPLAY ? ` +${selectedLabels.length - SHOWN_DISPLAY} más` : '')
              : placeholder}
          </span>
          <ChevronDown className={chevronClass(isOpen)} />
        </button>

        {isOpen && dropdownPos && createPortal(
          <div
            ref={listboxRef}
            id={`${selectId}-listbox`}
            role="listbox"
            className={listboxClass}
            style={{
              top: dropdownPos.top,
              bottom: dropdownPos.bottom,
              left: dropdownPos.left,
              width: dropdownPos.width,
              maxHeight: dropdownPos.maxHeight,
            }}
          >
            {searchable && (
              <div className={searchWrapperClass}>
                <input
                  ref={(el) => { if (el) el.focus({ preventScroll: true }) }}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Buscar..."
                  aria-label="Buscar"
                  className={searchInputClass(colorScheme)}
                />
              </div>
            )}
            <SelectOptionsList
              loading={loading}
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
              onHighlight={handleHighlight}
            />
          </div>,
          portalTarget,
        )}
      </div>
    </FieldWrapper>
  )
}
