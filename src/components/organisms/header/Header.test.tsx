import { render, screen } from '@testing-library/react'

import { Header } from 'src/components/organisms/header'

describe('Header', () => {
  it('should be rendered correctlly in default', () => {
    render(<Header />)
    expect(screen.getByTestId('header-icon')).toBeInTheDocument()
    expect(screen.getByLabelText('TOPページに戻る')).toBeInTheDocument()
  })
})
