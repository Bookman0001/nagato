/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import Circle from 'src/components/atoms/icon/circle'

describe('SearchIcon', () => {
  it('should be rendered', () => {
    render(<Circle size={30} />)
    expect(screen.getByTestId('circle-icon')).toBeDefined()
  })
})
