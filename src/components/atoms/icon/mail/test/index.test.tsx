/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import MailIcon from 'src/components/atoms/icon/mail'

describe('SearchIcon', () => {
  it('should be rendered', () => {
    render(<MailIcon size={50} />)
    expect(screen.getByTestId('mail-icon')).toBeDefined()
  })
})
