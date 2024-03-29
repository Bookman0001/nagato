import { render, screen } from '@testing-library/react'

import { ErrorMessage } from 'src/components/organisms/receptionForm/ErrorMessage'

describe('ErrorMessage', () => {
  it('to be rendered error', () => {
    render(<ErrorMessage errorMessage="必須です" id=":ra1" />)
    expect(screen.getByText('必須です')).toBeInTheDocument()
  })
})
