import { render, screen } from '@testing-library/react'

import { MainTitle } from 'src/components/atoms/mainTitle'

describe('MainTitle', () => {
  it('should be rendered', () => {
    render(<MainTitle>{'test main title'}</MainTitle>)
    expect(screen.getByText('test main title')).toBeDefined()
  })
})
