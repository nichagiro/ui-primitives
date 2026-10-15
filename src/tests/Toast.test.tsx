import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import { Toaster, toast } from '../components/ui/Toast'
import { getToasts, dismissToast } from '../components/ui/Toast/toast-store'

// el store es un singleton a nivel de módulo: hay que vaciarlo entre tests
afterEach(() => {
  act(() => {
    getToasts().forEach(t => dismissToast(t.id))
  })
})

describe('Toaster / toast', () => {
  it('no muestra nada si no hay toasts', () => {
    render(<Toaster />)
    expect(screen.queryAllByRole('alert')).toHaveLength(0)
  })

  it('toast.info muestra el mensaje con variante info', () => {
    render(<Toaster />)
    act(() => { toast.info('Mensaje informativo') })
    const item = screen.getByRole('alert')
    expect(item).toHaveTextContent('Mensaje informativo')
    expect(item.className).toContain('bg-info')
  })

  it('mapea las cuatro variantes a sus clases de color', () => {
    render(<Toaster />)
    act(() => {
      toast.info('i')
      toast.success('s')
      toast.warning('w')
      toast.error('e')
    })
    const items = screen.getAllByRole('alert')
    expect(items).toHaveLength(4)
    expect(items[0].className).toContain('bg-info')
    expect(items[1].className).toContain('bg-success')
    expect(items[2].className).toContain('bg-warning')
    expect(items[3].className).toContain('bg-danger')
  })

  it('usa duraciones por defecto y permite duración custom', () => {
    render(<Toaster />)
    let customId = ''
    act(() => {
      toast.success('ok')
      toast.error('boom')
      customId = toast.info('dato', 1500)
    })
    const entries = getToasts()
    expect(entries.find(t => t.message === 'ok')?.duration).toBe(4000)
    expect(entries.find(t => t.message === 'boom')?.duration).toBe(5000)
    expect(entries.find(t => t.id === customId)?.duration).toBe(1500)

    const customItem = screen.getByText('dato').closest('[role="alert"]')
    const progress = customItem?.querySelector('[class*="rhf-toastProgress"]')
    expect(progress?.getAttribute('style')).toContain('1500ms')
  })

  it('limita la cantidad visible con maxVisible', () => {
    render(<Toaster maxVisible={2} />)
    act(() => {
      toast.info('t1')
      toast.info('t2')
      toast.info('t3')
    })
    expect(screen.getAllByRole('alert')).toHaveLength(2)
    expect(screen.queryByText('t3')).not.toBeInTheDocument()
  })

  it('cierra el toast con el botón Cerrar', async () => {
    const user = userEvent.setup()
    render(<Toaster />)
    act(() => { toast.info('Cerrame') })
    expect(screen.getByRole('alert')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Cerrar' }))
    expect(screen.queryByText('Cerrame')).not.toBeInTheDocument()
    expect(getToasts()).toHaveLength(0)
  })

  it('toast.dismiss elimina un toast programáticamente', () => {
    render(<Toaster />)
    let id = ''
    act(() => { id = toast.success('Temporal') })
    expect(screen.getByText('Temporal')).toBeInTheDocument()
    act(() => { toast.dismiss(id) })
    expect(screen.queryByText('Temporal')).not.toBeInTheDocument()
    expect(getToasts()).toHaveLength(0)
  })

  it('mantiene los toasts montados fuera del árbol del consumidor (portal)', () => {
    const { container } = render(<Toaster />)
    act(() => { toast.info('Portaled') })
    const item = screen.getByRole('alert')
    expect(container).not.toContainElement(item)
    expect(document.body).toContainElement(item)
  })
})
