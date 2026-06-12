import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { Input } from './components/Input'
import { Select } from './components/Select'

const paises = [
  { value: "ar", label: 'Argentina' },
  { value: 'cl', label: 'Chile' },
  { value: 'mx', label: 'México' },
  { value: 'es', label: 'España' },
  { value: 'us', label: 'Estados Unidos' },
  { value: 'br', label: 'Brasil' },
  { value: 'co', label: 'Colombia' },
  { value: 'pe', label: 'Perú' },
  { value: 'uy', label: 'Uruguay' },
  { value: 'py', label: 'Paraguay' },
  { value: 'bo', label: 'Bolivia' },
  { value: 'ec', label: 'Ecuador' },
  { value: 've', label: 'Venezuela' },
  { value: 'cr', label: 'Costa Rica' },
  { value: 'pa', label: 'Panamá' },
  { value: 'gt', label: 'Guatemala' },
  { value: 'cu', label: 'Cuba' },
  { value: 'do', label: 'República Dominicana' },
]

type FormValues = {
  nombre: string
  pais: string
  paises: string[]
}

function App() {
  const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>({
    defaultValues: {
      // nombre: 'Juan Pérez',
      // pais: 'mx',
      // paises: paises.map(p => p.value),
    },
  })

  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    setTimeout(() => {
      // setValue("nombre", "NICOLAS", { shouldDirty: true });
      // setValue("pais", "co", { shouldDirty: true });
      // setValue("paises", ["co", "ar"], { shouldDirty: true });
    }, 1200);
  }, [dark, setValue])

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center gap-8 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">
          rhf-fields
        </h1>
        <button
          type="button"
          onClick={() => setDark(!dark)}
          className="cursor-pointer rounded-md border border-border bg-card px-3 py-1 text-sm text-foreground transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>

      <form onSubmit={handleSubmit((data) => console.log(data))} className="flex w-full flex-col gap-6">
        <Input
          label="Nombre"
          placeholder="Tu nombre"
          {...register('nombre')}
        />
        <Select
          placeholder="Seleccioná un país"
          label="País"
          required
          error={errors.pais?.message as string | undefined}
          {...register('pais', { required: 'Seleccioná un país' })}
        >
          {paises.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
        </Select>

        <Select
          placeholder="Elegí países"
          label="Países (multiple)"
          required
          multiple
          selectAll
          error={errors.paises?.message as string | undefined}
          {...register('paises', { required: 'Elegí al menos uno' })}
        >
          {paises.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
        </Select>
        <button
          type="submit"
          className="cursor-pointer rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:brightness-110"
        >
          Enviar
        </button>
      </form>

      <DevTool control={control} />
    </div>
  )
}

export default App
