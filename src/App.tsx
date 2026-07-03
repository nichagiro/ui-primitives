import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { Button } from './components/ui/Button'
import { paises, users, type User } from './demo/mockData'
import { FormTab, type FormValues } from './demo/FormTab'
import { UITab } from './demo/UITab'
import { TablesTab } from './demo/TablesTab'

function App() {
  const { register, control, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormValues>({
    defaultValues: {
      nombre: '',
      pais: 'mx',
      paises: paises.map(p => p.value),
      archivos: [],
    },
  })

  const [dark, setDark] = useState(false)
  const [tab, setTab] = useState<'form' | 'ui' | 'tables'>('form')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    const timer = setTimeout(() => {
      setValue("fecha", "1997-09-28", { shouldDirty: true });
      setValue("hora", "20:00", { shouldDirty: true });
      setValue("paises", ["co", "ar"], { shouldDirty: true });
    }, 1200);
    return () => clearTimeout(timer);
  }, [dark, setValue])

  return (
    <div className="mx-auto flex min-h-svh max-w-5xl flex-col gap-8 bg-background p-6 text-foreground">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">ui-primitives</h1>
        <Button variant="ghost" size="sm" onClick={() => setDark(!dark)}>
          {dark ? 'Light' : 'Dark'}
        </Button>
      </div>

      <div className="flex gap-1 rounded-lg bg-muted p-1">
        {(['form', 'ui', 'tables'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
              tab === t ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t === 'form' ? 'Formulario' : t === 'ui' ? 'UI Components' : 'Tablas'}
          </button>
        ))}
      </div>

      {tab === 'form' && (
        <FormTab
          register={register}
          handleSubmit={handleSubmit}
          reset={reset}
          errors={errors}
        />
      )}

      {tab === 'ui' && (
        <UITab
          users={users}
          selectedUser={selectedUser}
          modalOpen={modalOpen}
          onSelectedUserChange={setSelectedUser}
          onModalOpenChange={setModalOpen}
        />
      )}

      {tab === 'tables' && (
        <TablesTab
          onSelectedUserChange={setSelectedUser}
          onModalOpenChange={setModalOpen}
        />
      )}

      <DevTool control={control} />
    </div >
  )
}

export default App
