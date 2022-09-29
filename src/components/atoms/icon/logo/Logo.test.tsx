import { render, screen } from '@testing-library/react'

import { Logo } from 'src/components/atoms/icon'

describe('Logo', () => {
  it('should be rendered', () => {
    render(<Logo size={50} />)
    expect(screen.getByTestId('my-icon')).toBeDefined()
  })
})
