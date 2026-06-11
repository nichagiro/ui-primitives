import { useState } from 'react'
import { Input } from './components/Input'

function App() {
  const [value, setValue] = useState('')

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center gap-8 p-6">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
        rhf-fields
      </h1>
      <form className="flex w-full flex-col gap-6">
        <Input label="Nombre" required placeholder="Tu nombre" />
        <Input label="Email" required error="Email inválido" type="email" placeholder="correo@ejemplo.com" />
        <Input label="Contraseña" type="password" placeholder="••••••••" />
        <Input label="Deshabilitado" disabled placeholder="No disponible" />
        <Input label="Controlado" placeholder="Escribe algo..." value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
    </div>
  )
}

export default App
