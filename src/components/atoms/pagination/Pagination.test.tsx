import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from 'src/components/atoms/pagination'

describe('Pagination', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be rendered', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    render(
      <Pagination
        currentIndex={1}
        totalCount={10}
        limit={2}
        onClick={handleClick}
      />
    )
    expect(screen.getAllByRole('button')).toBeDefined()
    await user.click(screen.getByRole('button', { name: '1' }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should not to be rendered', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Pagination
        currentIndex={1}
        totalCount={0}
        limit={2}
        onClick={handleClick}
      />
    )
    expect(container.firstChild).toBe(null)
  })
})
