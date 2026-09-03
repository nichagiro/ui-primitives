import type { ColorScheme } from '../types'

export type SchemeStyles = Record<ColorScheme, string>

const SCHEMES: ColorScheme[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']

export function build(template: (scheme: ColorScheme) => string): SchemeStyles {
  return Object.fromEntries(SCHEMES.map((s) => [s, template(s)])) as SchemeStyles
}

// — Color simple —
export const textColor = () => build((s) => `text-${s}`)
export const bgColor = () => build((s) => `bg-${s}`)
export const textColorFg = () => build((s) => `text-${s}-foreground`)
export const bgColorFg = () => build((s) => `bg-${s}-foreground`)
export const accentColor = () => build((s) => `accent-${s}`)

// — Opacidad —
export const bgColorAlpha = (alpha = 10) => build((s) => `bg-${s}/${alpha}`)
export const borderBgColorAlpha = (alpha = 5) => build((s) => `border-${s} bg-${s}/${alpha}`)

// — Focus —
export const focusRing = (prefix = 'focus') =>
  build((s) => `${prefix}:border-${s} ${prefix}:ring-1 ${prefix}:ring-${s}`)
export const focusWithinRing = () =>
  build((s) => `focus-within:border-${s} focus-within:ring-${s}/30`)
export const peerFocusRing = (double = false) =>
  build((s) => `peer-focus-visible:ring${double ? '-2' : ''} peer-focus-visible:ring-${s}/30`)

// — Checked / radio —
export const peerCheckedBg = (prefix = 'peer-checked') => build((s) => `${prefix}:bg-${s}`)
export const peerCheckedBorder = (prefix = 'peer-checked') => build((s) => `${prefix}:border-${s}`)
export const peerCheckedBgBorder = (prefix = 'peer-checked') =>
  build((s) => `${prefix}:bg-${s} ${prefix}:border-${s}`)

// — Compuestos —
export const borderSolidColor = () => build((s) => `border-${s} bg-${s} text-${s}-foreground`)
export const borderBgColor = () => build((s) => `border-${s} bg-${s}`)
export const solidColor = (suffix?: string) =>
  build((s) => `bg-${s} text-${s}-foreground${suffix ? ' ' + suffix : ''}`)
export const softColor = () => build((s) => `bg-${s}/10 text-${s}`)
