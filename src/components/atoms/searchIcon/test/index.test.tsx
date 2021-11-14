/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import SearchIcon from 'src/components/atoms/searchIcon'

describe('SearchIcon', () => {
  it('should be rendered', () => {
    render(<SearchIcon size={50} />)
    expect(screen.getByTestId('search-icon')).toBeDefined()
  })
})
