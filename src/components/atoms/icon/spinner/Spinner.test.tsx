import { render, screen } from '@testing-library/react'

import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('to be endered correctly', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
