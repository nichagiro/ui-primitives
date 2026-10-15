import { Spinner } from '../../../lib/Icons'
import {
  loadingClass,
  spinnerClass,
  dotsWrapperClass,
  dotClass,
  barsWrapperClass,
  barClass,
} from './styles'
import type { ColorScheme } from '../../../types'
import type { LoadingSize, LoadingProps } from './types'

function Dots({ colorScheme, size }: { colorScheme: ColorScheme; size: LoadingSize }) {
  return (
    <span className={dotsWrapperClass(size)}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={dotClass(size, colorScheme)}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  )
}

function Bars({ colorScheme, size }: { colorScheme: ColorScheme; size: LoadingSize }) {
  return (
    <span className={barsWrapperClass()}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={barClass(size, colorScheme)}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  )
}

export function Loading({ variant = 'spinner', colorScheme = 'primary', size = 'md', className }: LoadingProps) {
  return (
    <div className={loadingClass(className)} role="status" aria-label="Loading">
      {variant === 'spinner' && <Spinner className={spinnerClass(size, colorScheme)} />}
      {variant === 'dots' && <Dots colorScheme={colorScheme} size={size} />}
      {variant === 'bars' && <Bars colorScheme={colorScheme} size={size} />}
    </div>
  )
}
