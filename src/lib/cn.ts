import { twMerge } from 'tailwind-merge'

export function cn(...classes: (string | boolean | null | undefined)[]): string {
  return twMerge(classes.filter((c): c is string => typeof c === 'string').join(' '))
}
