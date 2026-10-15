import type { ColorScheme } from '../../../types'

export type LoadingVariant = 'spinner' | 'dots' | 'bars'
export type LoadingSize = 'sm' | 'md' | 'lg'

export type LoadingProps = {
  variant?: LoadingVariant
  colorScheme?: ColorScheme
  size?: LoadingSize
  className?: string
}
