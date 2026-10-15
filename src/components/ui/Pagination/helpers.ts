export function getPageNumbers(page: number, totalPages: number): (number | 'dots')[] {
  const pages: (number | 'dots')[] = []
  if (totalPages <= 9) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (page > 4) pages.push('dots')
    const start = Math.max(2, page - 2)
    const end = Math.min(totalPages - 1, page + 2)
    for (let i = start; i <= end; i++) pages.push(i)
    if (page < totalPages - 3) pages.push('dots')
    pages.push(totalPages)
  }
  return pages
}
