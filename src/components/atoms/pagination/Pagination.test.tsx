import { render, screen, fireEvent } from '@testing-library/react'

import { Pagination } from 'src/components/atoms/pagination'

describe('Pagination', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be rendered', () => {
    const handleClick = jest.fn()
    render(
      <Pagination
        currentIndex={1}
        totalCount={10}
        limit={2}
        onClick={handleClick}
      />
    )
    expect(screen.getAllByRole('button')).toBeDefined()
    fireEvent.click(screen.getAllByRole('button')[0])
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
