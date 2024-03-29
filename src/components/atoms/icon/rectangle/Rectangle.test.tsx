import { render, screen } from '@testing-library/react'

import { Rectangle } from 'src/components/atoms/icon'

describe('Rectangle', () => {
  it('should be rendered', () => {
    render(<Rectangle size={50} />)
    expect(screen.getByTestId('rectangle-icon')).toBeInTheDocument()
  })
})
