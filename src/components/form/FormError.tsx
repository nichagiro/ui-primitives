type FormErrorProps = {
  message?: string
  className?: string
}

export function FormError({ message, className }: FormErrorProps) {
  if (!message) return null

  return (
    <p className={'mt-1 text-xs text-danger ps-1.5 ' + (className ?? '')} role="alert">
      {message}
    </p>
  )
}
