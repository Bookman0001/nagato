import { render, screen } from '@testing-library/react'

import { Mail } from 'src/components/atoms/icon/mail'

describe('Mail', () => {
  it('should be rendered', () => {
    render(<Mail size={50} />)
    expect(screen.getByTestId('mail-icon')).toBeDefined()
  })
})
