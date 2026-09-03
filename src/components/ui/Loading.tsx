import { Spinner } from '../../lib/Icons'
import { textColor, bgColor } from '../../lib/colorSchemes'

import type { ColorScheme } from '../../types'
export type LoadingVariant = 'spinner' | 'dots' | 'bars'
export type LoadingSize = 'sm' | 'md' | 'lg'

export type LoadingProps = {
  variant?: LoadingVariant
  colorScheme?: ColorScheme
  size?: LoadingSize
  className?: string
}

const spinnerSizes: Record<LoadingSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-10 w-10',
}

const dotSizes: Record<LoadingSize, { dot: string; gap: string }> = {
  sm: { dot: 'h-1 w-1', gap: 'gap-1' },
  md: { dot: 'h-1.5 w-1.5', gap: 'gap-1.5' },
  lg: { dot: 'h-2 w-2', gap: 'gap-2' },
}

const barSizes: Record<LoadingSize, { bar: string; height: string }> = {
  sm: { bar: 'w-0.5', height: 'h-3' },
  md: { bar: 'w-1', height: 'h-4' },
  lg: { bar: 'w-1.5', height: 'h-6' },
}

const schemeStyles = textColor()
const bgSchemeStyles = bgColor()

function Dots({ colorScheme, size }: { colorScheme: ColorScheme; size: LoadingSize }) {
  const { dot, gap } = dotSizes[size]
  return (
    <span className={`inline-flex items-center ${gap}`}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`${dot} block rounded-full ${bgSchemeStyles[colorScheme]} animate-bounce`}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  )
}

function Bars({ colorScheme, size }: { colorScheme: ColorScheme; size: LoadingSize }) {
  const { bar, height } = barSizes[size]
  return (
    <span className="inline-flex items-end gap-0.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`${bar} ${height} rounded-full ${bgSchemeStyles[colorScheme]} animate-pulse`}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  )
}

export function Loading({ variant = 'spinner', colorScheme = 'primary', size = 'md', className }: LoadingProps) {
  const cls = `inline-flex items-center justify-center ${className ?? ''}`

  return (
    <div className={cls} role="status" aria-label="Loading">
      {variant === 'spinner' && <Spinner className={`${spinnerSizes[size]} ${schemeStyles[colorScheme]}`} />}
      {variant === 'dots' && <Dots colorScheme={colorScheme} size={size} />}
      {variant === 'bars' && <Bars colorScheme={colorScheme} size={size} />}
    </div>
  )
}
