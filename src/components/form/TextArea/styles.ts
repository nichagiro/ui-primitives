export const resizeMap = {
  none: 'resize-none',
  vertical: 'resize-y',
  both: 'resize',
}

export const baseClass = [
  'block w-full bg-transparent text-sm text-foreground outline-none min-h-[80px]',
  'placeholder:text-muted-foreground',
  'disabled:cursor-not-allowed',
  'pb-2',
].join(' ')