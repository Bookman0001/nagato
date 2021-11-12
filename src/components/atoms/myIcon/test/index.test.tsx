/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import MyIcon from 'src/components/atoms/myIcon'

describe('Title', () => {
  it('should be rendered', () => {
    render(<MyIcon size={50} />)
    expect(screen.getByTestId('my-icon')).toBeDefined()
  })
})
