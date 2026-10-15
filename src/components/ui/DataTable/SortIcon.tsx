import type { SortDirection } from './types'

type SortIconProps = {
  active: boolean
  direction: SortDirection
}

function arrowClass(active: boolean, direction: SortDirection, arrow: 'asc' | 'desc') {
  return 'h-1.5 w-2 ' + (active && direction === arrow ? 'text-foreground' : 'text-muted-foreground/30')
}

export function SortIcon({ active, direction }: SortIconProps) {
  return (
    <span className="inline-flex flex-col leading-none gap-0.5">
      <svg
        viewBox="0 0 10 6"
        className={arrowClass(active, direction, 'asc')}
        fill="currentColor"
      >
        <path d="M5 0l5 6H0z" />
      </svg>
      <svg
        viewBox="0 0 10 6"
        className={arrowClass(active, direction, 'desc')}
        fill="currentColor"
      >
        <path d="M5 6L0 0h10z" />
      </svg>
    </span>
  )
}
