import { render, screen } from '@testing-library/react'

import { Title } from 'src/components/atoms/title'

describe('Title', () => {
  it('should be rendered', () => {
    render(<Title>{'test title'}</Title>)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
