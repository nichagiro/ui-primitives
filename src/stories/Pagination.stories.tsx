import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pagination } from '../components/ui/Pagination'
import { useState } from 'react'

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    page: { control: { type: 'number', min: 1 } },
    totalPages: { control: { type: 'number', min: 1 } },
    totalItems: { control: { type: 'number', min: 0 } },
    startRecord: { control: { type: 'number', min: 0 } },
    endRecord: { control: { type: 'number', min: 0 } },
    colorScheme: { control: 'select', options: ['primary', 'danger', 'success'] },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    page: 1,
    totalPages: 5,
    totalItems: 50,
    startRecord: 1,
    endRecord: 10,
    onPageChange: () => {},
    colorScheme: 'primary',
  },
}

export const MiddlePage: Story = {
  args: {
    page: 3,
    totalPages: 5,
    totalItems: 50,
    startRecord: 21,
    endRecord: 30,
    onPageChange: () => {},
    colorScheme: 'primary',
  },
}

export const LastPage: Story = {
  args: {
    page: 5,
    totalPages: 5,
    totalItems: 50,
    startRecord: 41,
    endRecord: 50,
    onPageChange: () => {},
    colorScheme: 'danger',
  },
}

export const ManyPages: Story = {
  args: {
    page: 10,
    totalPages: 50,
    totalItems: 500,
    startRecord: 91,
    endRecord: 100,
    onPageChange: () => {},
    colorScheme: 'primary',
  },
}

export const Interactive: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const totalPages = 10
    return (
      <Pagination
        page={page}
        totalPages={totalPages}
        totalItems={100}
        startRecord={(page - 1) * 10 + 1}
        endRecord={Math.min(page * 10, 100)}
        onPageChange={setPage}
        colorScheme="primary"
      />
    )
  },
}
