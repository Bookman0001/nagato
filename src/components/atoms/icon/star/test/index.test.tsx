/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import StarIcon from 'src/components/atoms/icon/star'

describe('SearchIcon', () => {
  it('should be rendered', () => {
    render(<StarIcon size={30} />)
    expect(screen.getByTestId('star-icon')).toBeDefined()
  })
})
