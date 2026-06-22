import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RadioGroup } from '../components/form/RadioGroup'

const options = [
  { label: 'Masculino', value: 'm' },
  { label: 'Femenino', value: 'f' },
]

describe('RadioGroup', () => {
  it('renders label', () => {
    render(<RadioGroup label="Género" options={options} />)
    expect(screen.getByText('Género')).toBeInTheDocument()
  })

  it('renders all options', () => {
    render(<RadioGroup label="Género" options={options} />)
    expect(screen.getByText('Masculino')).toBeInTheDocument()
    expect(screen.getByText('Femenino')).toBeInTheDocument()
  })

  it('renders radio inputs for each option', () => {
    render(<RadioGroup label="Género" options={options} />)
    const radios = screen.getAllByRole('radio')
    expect(radios).toHaveLength(2)
  })

  it('shows error message', () => {
    render(<RadioGroup label="Género" options={options} error="Seleccioná un género" />)
    expect(screen.getByRole('alert')).toHaveTextContent('Seleccioná un género')
  })

  it('uses vertical orientation by default', () => {
    const { container } = render(<RadioGroup label="Género" options={options} />)
    const innerDiv = container.querySelector('fieldset > div')
    expect(innerDiv?.className).toContain('space-y-2')
  })

  it('uses horizontal orientation when set', () => {
    const { container } = render(<RadioGroup label="Género" options={options} orientation="horizontal" />)
    const innerDiv = container.querySelector('fieldset > div')
    expect(innerDiv?.className).toContain('flex')
    expect(innerDiv?.className).toContain('gap-4')
  })

  it('sets role="group"', () => {
    render(<RadioGroup label="Género" options={options} />)
    expect(screen.getByRole('group')).toBeInTheDocument()
  })

  it('disables option when specified', () => {
    const opts = [
      { label: 'Masculino', value: 'm' },
      { label: 'Femenino', value: 'f', disabled: true },
    ]
    render(<RadioGroup label="Género" options={opts} />)
    const radios = screen.getAllByRole('radio')
    expect(radios[1]).toBeDisabled()
  })
})
