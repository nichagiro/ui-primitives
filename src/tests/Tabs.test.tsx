import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Tabs } from '../components/ui/Tabs'
import type { TabsItem } from '../components/ui/Tabs'

const basicTabs: TabsItem[] = [
  { value: 'tab1', label: 'Tab 1', content: 'Content 1' },
  { value: 'tab2', label: 'Tab 2', content: 'Content 2' },
  { value: 'tab3', label: 'Tab 3', content: 'Content 3' },
]

function getTabList() {
  return screen.getByRole('tablist')
}

function getTab(name: string) {
  return screen.getByRole('tab', { name })
}

describe('Tabs', () => {
  it('renders all tab triggers', () => {
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    expect(getTab('Tab 1')).toBeInTheDocument()
    expect(getTab('Tab 2')).toBeInTheDocument()
    expect(getTab('Tab 3')).toBeInTheDocument()
  })

  it('renders default active tab content', () => {
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument()
  })

  it('switches tab content on click', async () => {
    const user = userEvent.setup()
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    await user.click(getTab('Tab 2'))
    expect(screen.getByText('Content 2')).toBeInTheDocument()
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
  })

  it('sets aria-selected on active tab', () => {
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    expect(getTab('Tab 1')).toHaveAttribute('aria-selected', 'true')
    expect(getTab('Tab 2')).toHaveAttribute('aria-selected', 'false')
  })

  it('updates aria-selected on switch', async () => {
    const user = userEvent.setup()
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    await user.click(getTab('Tab 2'))
    expect(getTab('Tab 2')).toHaveAttribute('aria-selected', 'true')
    expect(getTab('Tab 1')).toHaveAttribute('aria-selected', 'false')
  })

  it('calls onChange when tab is clicked', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Tabs defaultValue="tab1" tabs={basicTabs} onChange={onChange} />)
    await user.click(getTab('Tab 2'))
    expect(onChange).toHaveBeenCalledWith('tab2')
  })

  it('works in controlled mode', () => {
    const { rerender } = render(<Tabs value="tab1" tabs={basicTabs} />)
    expect(screen.getByText('Content 1')).toBeInTheDocument()
    rerender(<Tabs value="tab2" tabs={basicTabs} />)
    expect(screen.getByText('Content 2')).toBeInTheDocument()
  })

  it('disables disabled tabs', () => {
    const tabs: TabsItem[] = [
      { value: 'tab1', label: 'Tab 1', content: 'Content 1' },
      { value: 'tab2', label: 'Tab 2', content: 'Content 2', disabled: true },
    ]
    render(<Tabs defaultValue="tab1" tabs={tabs} />)
    expect(getTab('Tab 2')).toBeDisabled()
  })

  it('does not switch to disabled tab on click', async () => {
    const onChange = vi.fn()
    const tabs: TabsItem[] = [
      { value: 'tab1', label: 'Tab 1', content: 'Content 1' },
      { value: 'tab2', label: 'Tab 2', content: 'Content 2', disabled: true },
    ]
    const user = userEvent.setup()
    render(<Tabs defaultValue="tab1" tabs={tabs} onChange={onChange} />)
    await user.click(getTab('Tab 2'))
    expect(onChange).not.toHaveBeenCalled()
    expect(screen.getByText('Content 1')).toBeInTheDocument()
  })

  it('applies active tab colorScheme classes', () => {
    render(<Tabs defaultValue="tab1" colorScheme="danger" tabs={basicTabs} />)
    expect(getTab('Tab 1').className).toContain('text-danger')
    expect(getTab('Tab 1').className).toContain('border-danger')
  })

  it('applies inactive tab classes', () => {
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    expect(getTab('Tab 2').className).toContain('text-muted-foreground')
    expect(getTab('Tab 2').className).toContain('border-transparent')
  })

  it('applies tablist border-b border-border', () => {
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    expect(getTabList().className).toContain('border-b')
    expect(getTabList().className).toContain('border-border')
  })

  it('applies tabpanel classes', () => {
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    const panel = screen.getByRole('tabpanel')
    expect(panel.className).toContain('py-4')
    expect(panel.className).toContain('text-sm')
    expect(panel.className).toContain('text-foreground')
  })

  it('merges custom className on root', () => {
    render(<Tabs defaultValue="tab1" tabs={basicTabs} className="my-wrapper" />)
    const tabpanel = screen.getByRole('tabpanel')
    expect(tabpanel.parentElement!.className).toContain('my-wrapper')
  })

  it('navigates tabs with ArrowRight and ArrowDown', async () => {
    const user = userEvent.setup()
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    getTab('Tab 1').focus()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByText('Content 2')).toBeInTheDocument()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByText('Content 3')).toBeInTheDocument()
  })

  it('wraps around with ArrowRight on last tab', async () => {
    const user = userEvent.setup()
    render(<Tabs defaultValue="tab3" tabs={basicTabs} />)
    getTab('Tab 3').focus()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByText('Content 1')).toBeInTheDocument()
  })

  it('navigates backwards with ArrowLeft', async () => {
    const user = userEvent.setup()
    render(<Tabs defaultValue="tab2" tabs={basicTabs} />)
    getTab('Tab 2').focus()
    await user.keyboard('{ArrowLeft}')
    expect(screen.getByText('Content 1')).toBeInTheDocument()
  })

  it('jumps to first tab with Home', async () => {
    const user = userEvent.setup()
    render(<Tabs defaultValue="tab3" tabs={basicTabs} />)
    getTab('Tab 3').focus()
    await user.keyboard('{Home}')
    expect(screen.getByText('Content 1')).toBeInTheDocument()
  })

  it('jumps to last tab with End', async () => {
    const user = userEvent.setup()
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    getTab('Tab 1').focus()
    await user.keyboard('{End}')
    expect(screen.getByText('Content 3')).toBeInTheDocument()
  })

  it('sets correct ARIA attributes on tabpanel', () => {
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    const panel = screen.getByRole('tabpanel')
    expect(panel).toHaveAttribute('id', 'panel-tab1')
    expect(panel).toHaveAttribute('aria-labelledby', 'tab-tab1')
  })

  it('sets tabIndex=0 on active tab and -1 on inactive', () => {
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    expect(getTab('Tab 1')).toHaveAttribute('tabindex', '0')
    expect(getTab('Tab 2')).toHaveAttribute('tabindex', '-1')
  })

  it('applies pill variant tablist classes', () => {
    render(<Tabs defaultValue="tab1" variant="pill" tabs={basicTabs} />)
    const tablist = getTabList()
    expect(tablist.className).toContain('bg-muted')
    expect(tablist.className).toContain('rounded-lg')
  })

  it('applies pill variant active tab classes', () => {
    render(<Tabs defaultValue="tab1" variant="pill" colorScheme="primary" tabs={basicTabs} />)
    const tab = getTab('Tab 1')
    expect(tab.className).toContain('bg-primary')
    expect(tab.className).toContain('text-primary-foreground')
    expect(tab.className).toContain('shadow-sm')
    expect(tab.className).toContain('rounded-md')
  })

  it('applies pill variant inactive tab classes', () => {
    render(<Tabs defaultValue="tab1" variant="pill" tabs={basicTabs} />)
    expect(getTab('Tab 2').className).toContain('rounded-md')
  })

  it('applies cards variant tablist classes', () => {
    render(<Tabs defaultValue="tab1" variant="cards" tabs={basicTabs} />)
    const tablist = getTabList()
    expect(tablist.className).not.toContain('border-b')
  })

  it('applies cards variant active tab classes', () => {
    render(<Tabs defaultValue="tab1" variant="cards" colorScheme="primary" tabs={basicTabs} />)
    const tab = getTab('Tab 1')
    expect(tab.className).toContain('bg-card')
    expect(tab.className).toContain('border-border')
    expect(tab.className).toContain('-mb-px')
    expect(tab.className).toContain('rounded-t-lg')
  })

  it('applies cards variant inactive tab classes', () => {
    render(<Tabs defaultValue="tab1" variant="cards" tabs={basicTabs} />)
    expect(getTab('Tab 2').className).toContain('bg-muted/50')
    expect(getTab('Tab 2').className).toContain('rounded-t-lg')
  })

  it('applies cards variant panel classes', () => {
    render(<Tabs defaultValue="tab1" variant="cards" tabs={basicTabs} />)
    const panel = screen.getByRole('tabpanel')
    expect(panel.className).toContain('border')
    expect(panel.className).toContain('border-border')
    expect(panel.className).toContain('rounded-b-lg')
    expect(panel.className).toContain('-mt-px')
  })

  it('defaults to underline variant', () => {
    render(<Tabs defaultValue="tab1" tabs={basicTabs} />)
    expect(getTabList().className).toContain('border-b')
    expect(getTab('Tab 1').className).toContain('border-b-2')
  })
})
