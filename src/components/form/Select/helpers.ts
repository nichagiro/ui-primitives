export type SelectDropdownPosition = {
  top: number | string
  bottom: number | string
  left: number
  width: number
  maxHeight: number
}

export function calcDropdownPosition(container: HTMLElement | null): SelectDropdownPosition | null {
  if (!container) return null
  const rect = container.getBoundingClientRect()
  const spaceBelow = window.innerHeight - rect.bottom
  const spaceAbove = rect.top
  const MARGIN = 8
  const DESIRED_HEIGHT = 240

  if (spaceBelow >= DESIRED_HEIGHT || spaceBelow >= spaceAbove) {
    return {
      top: Math.max(8, rect.bottom + 4),
      bottom: 'auto',
      left: rect.left,
      width: rect.width,
      maxHeight: Math.max(100, Math.min(DESIRED_HEIGHT, spaceBelow - MARGIN)),
    }
  }
  return {
    top: 'auto',
    bottom: window.innerHeight - rect.top + 4,
    left: rect.left,
    width: rect.width,
    maxHeight: Math.max(100, Math.min(DESIRED_HEIGHT, spaceAbove - MARGIN)),
  }
}