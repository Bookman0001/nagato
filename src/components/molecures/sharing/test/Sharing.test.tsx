/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import Sharing from 'src/components/molecures/sharing'

describe('Sharing', () => {
  it('should be rendered', () => {
    render(<Sharing />)
    expect(screen.getByAltText('facebook')).toBeDefined()
    expect(screen.getByAltText('twitter')).toBeDefined()
    expect(screen.getByAltText('mail')).toBeDefined()
  })
})
