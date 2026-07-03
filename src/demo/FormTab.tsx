import { Button } from '../components/ui/Button'
import { Check } from '../components/form/Check'
import { FileUpload } from '../components/form/FileUpload'
import { Input } from '../components/form/Input'
import { RadioGroup } from '../components/form/RadioGroup'
import { Select } from '../components/form/Select'
import { TextArea } from '../components/form/TextArea'
import { paises } from './mockData'
import type { UseFormRegister, UseFormHandleSubmit, UseFormReset, FormState } from 'react-hook-form'

export type FormValues = {
  nombre: string
  pais: string
  paises: string[]
  comentarios: string
  terms: boolean
  notificaciones: boolean
  gender: string
  fecha: string
  hora: string
  archivos: File[]
}

type FormTabProps = {
  register: UseFormRegister<FormValues>
  handleSubmit: UseFormHandleSubmit<FormValues>
  reset: UseFormReset<FormValues>
  errors: FormState<FormValues>['errors']
}

export function FormTab({ register, handleSubmit, reset, errors }: FormTabProps) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-foreground">Formulario</h2>
      <form onSubmit={handleSubmit((data) => console.log(data))} className="flex w-full flex-col gap-6">
        <Input label="Nombre" placeholder="Tu nombre" {...register('nombre')} isRequired />
        <Select
          isRequired
          placeholder="Seleccioná un país"
          label="País"
          searchable
          error={errors.pais?.message as string | undefined}
          {...register('pais', { required: 'Seleccioná un país' })}
        >
          {paises.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
        </Select>

        <Select
          placeholder="Elegí países"
          label="Países (multiple)"
          multiple
          selectAll
          error={errors.paises?.message as string | undefined}
          {...register('paises', { required: 'Seleccioná un país' })}
        >
          {paises.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
        </Select>

        <Input type="date" label="Fecha" {...register('fecha')} isRequired />
        <Input type="time" label="Hora" {...register('hora')} />

        <FileUpload isRequired label="Adjuntar archivos" multiple accept=".pdf,.jpg,.png,.csv" maxSize={5 * 1024 * 1024} {...register('archivos')} />

        <TextArea isRequired label="Comentarios" placeholder="Escribí algo..." {...register('comentarios')} />

        <RadioGroup
          orientation='horizontal'
          isRequired
          label="Género"
          options={[
            { label: 'Masculino', value: 'm' },
            { label: 'Femenino', value: 'f' },
          ]}
          error={errors.gender?.message}
          {...register('gender', { required: 'Seleccioná un género' })}
        />

        <Check isRequired label="Acepto términos y condiciones" error={errors.terms?.message} {...register('terms', { required: 'Debes aceptar los términos' })} />
        <Check label="Recibir notificaciones" variant="switch" {...register('notificaciones')} />

        <div className="flex gap-2">
          <Button type="submit">Enviar</Button>
          <Button type="button" variant="soft" colorScheme="warning" onClick={() => reset()}>
            Resetear
          </Button>
        </div>
      </form>
    </section>
  )
}
