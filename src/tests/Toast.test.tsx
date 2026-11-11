import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi } from 'vitest'
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

  describe('persistente (no auto-dismiss)', () => {
    it('no renderiza barra de progreso con persistent: true en opciones', () => {
      render(<Toaster />)
      act(() => {
        toast.info('Persistente', { persistent: true })
      })
      const alert = screen.getByRole('alert')
      expect(alert).toHaveTextContent('Persistente')
      const progress = alert.querySelector('[class*="rhf-toastProgress"]')
      expect(progress).toBeNull()
    })

    it('no renderiza barra de progreso con duration: 0', () => {
      render(<Toaster />)
      act(() => {
        toast.warning('Persistente con duration 0', { duration: 0 })
        toast.error('Persistente con number 0', 0)
      })
      const alerts = screen.getAllByRole('alert')
      expect(alerts[0].querySelector('[class*="rhf-toastProgress"]')).toBeNull()
      expect(alerts[1].querySelector('[class*="rhf-toastProgress"]')).toBeNull()
    })

    it('respeta Toaster con autoClose={false} haciendo los toasts persistentes por defecto', () => {
      render(<Toaster autoClose={false} />)
      act(() => {
        toast.info('Global no auto-close')
      })
      const alert = screen.getByRole('alert')
      const progress = alert.querySelector('[class*="rhf-toastProgress"]')
      expect(progress).toBeNull()
    })
  })

  describe('botones de acción', () => {
    it('hace el toast automáticamente persistente cuando tiene action o cancel', () => {
      render(<Toaster />)
      act(() => {
        toast.warning('Aviso con acción', {
          action: { label: 'Aceptar' },
        })
      })
      const alert = screen.getByRole('alert')
      const progress = alert.querySelector('[class*="rhf-toastProgress"]')
      expect(progress).toBeNull()
      expect(getToasts()[0].persistent).toBe(true)
      expect(getToasts()[0].duration).toBe(0)
    })

    it('permite anular la persistencia automática simplemente pasando duration con action', () => {
      render(<Toaster />)
      act(() => {
        toast.info('Temporal con acción', {
          duration: 3500,
          action: { label: 'Deshacer' },
        })
      })
      const alert = screen.getByRole('alert')
      const progress = alert.querySelector('[class*="rhf-toastProgress"]')
      expect(progress).not.toBeNull()
      expect(progress?.getAttribute('style')).toContain('3500ms')
      expect(getToasts()[0].duration).toBe(3500)
    })

    it('oculta el icono cuando el toast tiene botones de acción por defecto', () => {
      render(<Toaster />)
      act(() => {
        toast.info('Sin icono', {
          action: { label: 'Deshacer' },
        })
      })
      const alert = screen.getByRole('alert')
      // No debe tener icono ni botón de cerrar (0 svgs)
      expect(alert.querySelector('svg')).toBeNull()
    })

    it('permite forzar la visualización del icono con showIcon: true', () => {
      render(<Toaster />)
      act(() => {
        toast.info('Con icono forzado', {
          showIcon: true,
          action: { label: 'Deshacer' },
        })
      })
      const alert = screen.getByRole('alert')
      expect(alert.querySelector('svg')).not.toBeNull()
    })

    it('renderiza botón de acción y ejecuta callback al hacer click cerrando el toast', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Toaster />)

      let toastId = ''
      act(() => {
        toastId = toast.success('Elemento eliminado', {
          action: {
            label: 'Deshacer',
            onClick: handleClick,
          },
        })
      })

      const actionBtn = screen.getByRole('button', { name: 'Deshacer' })
      expect(actionBtn).toBeInTheDocument()
      expect(screen.queryByRole('button', { name: 'Cerrar' })).not.toBeInTheDocument()

      await user.click(actionBtn)
      expect(handleClick).toHaveBeenCalledTimes(1)
      expect(handleClick).toHaveBeenCalledWith(expect.anything(), toastId)

      // Se cierra automáticamente por defecto al presionar la acción
      expect(screen.queryByText('Elemento eliminado')).not.toBeInTheDocument()
      expect(getToasts()).toHaveLength(0)
    })

    it('mantiene el toast abierto si autoDismiss es false', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Toaster />)

      act(() => {
        toast.info('Confirmar datos', {
          persistent: true,
          action: {
            label: 'Ver detalles',
            onClick: handleClick,
            autoDismiss: false,
          },
        })
      })

      const actionBtn = screen.getByRole('button', { name: 'Ver detalles' })
      await user.click(actionBtn)

      expect(handleClick).toHaveBeenCalledTimes(1)
      expect(screen.getByText('Confirmar datos')).toBeInTheDocument()
    })

    it('soporta botón cancel sin onClick que cierra el toast directamente', async () => {
      const user = userEvent.setup()
      render(<Toaster />)

      act(() => {
        toast.warning('¿Eliminar este registro?', {
          persistent: true,
          action: {
            label: 'Eliminar',
            onClick: vi.fn(),
          },
          cancel: {
            label: 'Cancelar',
          },
        })
      })

      const cancelBtn = screen.getByRole('button', { name: 'Cancelar' })
      expect(cancelBtn).toBeInTheDocument()

      await user.click(cancelBtn)
      expect(screen.queryByText('¿Eliminar este registro?')).not.toBeInTheDocument()
      expect(getToasts()).toHaveLength(0)
    })

    it('soporta acción principal y acción secundaria / cancel', async () => {
      const user = userEvent.setup()
      const handleRetry = vi.fn()
      const handleCancel = vi.fn()
      render(<Toaster />)

      act(() => {
        toast.error('Fallo en sincronización', {
          persistent: true,
          action: {
            label: 'Reintentar',
            onClick: handleRetry,
          },
          cancel: {
            label: 'Cancelar',
            onClick: handleCancel,
          },
        })
      })

      const retryBtn = screen.getByRole('button', { name: 'Reintentar' })
      const cancelBtn = screen.getByRole('button', { name: 'Cancelar' })

      expect(retryBtn).toBeInTheDocument()
      expect(cancelBtn).toBeInTheDocument()

      await user.click(cancelBtn)
      expect(handleCancel).toHaveBeenCalledTimes(1)
      expect(screen.queryByText('Fallo en sincronización')).not.toBeInTheDocument()
    })

    it('mantiene compatibilidad con secondaryAction como alias de cancel', async () => {
      const user = userEvent.setup()
      const handleCancel = vi.fn()
      render(<Toaster />)

      act(() => {
        toast.info('Aviso con secondaryAction', {
          secondaryAction: {
            label: 'Descartar',
            onClick: handleCancel,
          },
        })
      })

      const cancelBtn = screen.getByRole('button', { name: 'Descartar' })
      await user.click(cancelBtn)
      expect(handleCancel).toHaveBeenCalledTimes(1)
      expect(screen.queryByText('Aviso con secondaryAction')).not.toBeInTheDocument()
    })

    it('permite pasar un ReactNode personalizado como action', async () => {
      const user = userEvent.setup()
      const handleCustom = vi.fn()
      render(<Toaster />)

      act(() => {
        toast.info('Aviso personalizado', {
          action: (
            <button type="button" onClick={handleCustom} data-testid="custom-action">
              Acción Custom
            </button>
          ),
        })
      })

      const customBtn = screen.getByTestId('custom-action')
      expect(customBtn).toBeInTheDocument()
      await user.click(customBtn)
      expect(handleCustom).toHaveBeenCalledTimes(1)
    })
  })
})
