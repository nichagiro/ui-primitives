const BG_IMAGE_PREFIXES = [
  'bg-gradient',
  'bg-clip',
  'bg-cover',
  'bg-contain',
  'bg-auto',
  'bg-fixed',
  'bg-local',
  'bg-scroll',
  'bg-repeat',
]

function isBgColor(cls: string): boolean {
  return cls.startsWith('bg-') && !BG_IMAGE_PREFIXES.some((p) => cls.startsWith(p))
}

export function cn(...classes: (string | boolean | null | undefined)[]): string {
  const parts = classes.filter(Boolean).join(' ').split(/\s+/).filter(Boolean)

  let lastBg = -1
  for (let i = parts.length - 1; i >= 0; i--) {
    if (isBgColor(parts[i])) {
      lastBg = i
      break
    }
  }

  if (lastBg === -1) return parts.join(' ')

  return parts.filter((cls, i) => i === lastBg || !isBgColor(cls)).join(' ')
}