/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import HeaderIcon from 'src/components/atoms/icon/header'

describe('HeaderIcon', () => {
  it('should be rendered', () => {
    render(<HeaderIcon />)
    expect(screen.getByTestId('header-icon')).toBeDefined()
  })
})
