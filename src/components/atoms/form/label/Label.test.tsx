import { render, screen } from '@testing-library/react'

import { Label } from 'src/components/atoms/form'

describe('Label', () => {
  it('to be rendered correctly', () => {
    render(<Label>label item</Label>)
    expect(screen.getByText('label item')).toBeInTheDocument()
  })
})
