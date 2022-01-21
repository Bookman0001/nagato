import { render, screen } from '@testing-library/react'

import { Search } from 'src/components/atoms/icon/search'

describe('Search', () => {
  it('should be rendered', () => {
    render(<Search size={50} />)
    expect(screen.getByTestId('search-icon')).toBeDefined()
  })
})
