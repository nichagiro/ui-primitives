import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeAll } from 'vitest'
import { FileUpload } from '../components/form/FileUpload'

function makeFile(name: string, bytes = 8, type = 'application/pdf') {
  return new File(['x'.repeat(bytes)], name, { type })
}

// jsdom no implementa createObjectURL / revokeObjectURL (los usa FileList para previews)
beforeAll(() => {
  URL.createObjectURL = vi.fn(() => 'blob:mock')
  URL.revokeObjectURL = vi.fn()
})

describe('FileUpload', () => {
  it('renderiza label y dropzone', () => {
    render(<FileUpload label="Adjuntar archivos" isRequired />)
    expect(screen.getByLabelText(/Adjuntar archivos/)).toBeInTheDocument()
    expect(screen.getByText('Arrastra archivos o haz clic')).toBeInTheDocument()
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('muestra el error externo', () => {
    render(<FileUpload label="Archivo" error="El archivo es requerido" />)
    expect(screen.getByRole('alert')).toHaveTextContent('El archivo es requerido')
  })

  it('muestra los formatos aceptados', () => {
    render(<FileUpload label="Archivo" accept=".pdf,.jpg" />)
    expect(screen.getByText('Formatos: .pdf, .jpg')).toBeInTheDocument()
  })

  it('agrega el archivo seleccionado a la lista', async () => {
    const user = userEvent.setup()
    render(<FileUpload label="Archivo" />)
    await user.upload(screen.getByLabelText(/Archivo/), makeFile('informe.pdf', 2048))
    expect(screen.getByText('informe.pdf')).toBeInTheDocument()
    expect(screen.getByText('2 KB')).toBeInTheDocument()
  })

  it('reemplaza el archivo en modo single', async () => {
    const user = userEvent.setup()
    render(<FileUpload label="Archivo" />)
    const input = screen.getByLabelText(/Archivo/)
    await user.upload(input, makeFile('uno.txt', 10, 'text/plain'))
    expect(screen.getByText('uno.txt')).toBeInTheDocument()
    await user.upload(input, makeFile('dos.txt', 10, 'text/plain'))
    expect(screen.queryByText('uno.txt')).not.toBeInTheDocument()
    expect(screen.getByText('dos.txt')).toBeInTheDocument()
  })

  it('acumula varios archivos con multiple', async () => {
    const user = userEvent.setup()
    render(<FileUpload label="Adjuntar archivos" multiple />)
    await user.upload(screen.getByLabelText(/Adjuntar archivos/), [
      makeFile('a.pdf', 10),
      makeFile('b.pdf', 10),
    ])
    expect(screen.getByText('a.pdf')).toBeInTheDocument()
    expect(screen.getByText('b.pdf')).toBeInTheDocument()
  })

  it('detecta archivos duplicados con multiple', async () => {
    const user = userEvent.setup()
    render(<FileUpload label="Adjuntar archivos" multiple />)
    const input = screen.getByLabelText(/Adjuntar archivos/)
    await user.upload(input, makeFile('a.pdf', 10))
    await user.upload(input, makeFile('a.pdf', 10))
    expect(screen.getByRole('alert')).toHaveTextContent('a.pdf ya existe')
    expect(screen.getAllByText('a.pdf')).toHaveLength(1)
  })

  it('rechaza archivos que superan maxSize', async () => {
    const user = userEvent.setup()
    render(<FileUpload label="Archivo" maxSize={1024} />)
    await user.upload(screen.getByLabelText(/Archivo/), makeFile('grande.pdf', 2048))
    expect(screen.getByRole('alert')).toHaveTextContent('Archivo supera el límite de 1 KB')
    expect(screen.queryByText('grande.pdf')).not.toBeInTheDocument()
  })

  it('permite quitar un archivo de la lista', async () => {
    const user = userEvent.setup()
    render(<FileUpload label="Archivo" />)
    await user.upload(screen.getByLabelText(/Archivo/), makeFile('informe.pdf', 10))
    await user.click(screen.getByRole('button', { name: 'Eliminar informe.pdf' }))
    expect(screen.queryByText('informe.pdf')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Eliminar informe.pdf' })).not.toBeInTheDocument()
  })

  it('delega la lista al padre en modo controlado', async () => {
    const user = userEvent.setup()
    const onFilesChange = vi.fn()
    render(<FileUpload label="Archivo" files={[]} onFilesChange={onFilesChange} />)
    await user.upload(screen.getByLabelText(/Archivo/), makeFile('nuevo.pdf', 10))
    expect(onFilesChange).toHaveBeenCalledTimes(1)
    expect(onFilesChange.mock.calls[0][0]).toHaveLength(1)
    expect(onFilesChange.mock.calls[0][0][0].name).toBe('nuevo.pdf')
    // el componente no actualiza su propio estado: espera que el padre pase los nuevos files
    expect(screen.queryByText('nuevo.pdf')).not.toBeInTheDocument()
  })

  it('deshabilita la dropzone con disabled', () => {
    render(<FileUpload label="Archivo" disabled />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
