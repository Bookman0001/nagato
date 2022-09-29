import { render, screen } from '@testing-library/react'

import { Header } from 'src/components/atoms/icon'

describe('Header', () => {
  it('should be rendered', () => {
    render(<Header />)
    expect(screen.getByTestId('header-icon')).toBeDefined()
  })
})
