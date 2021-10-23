/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import Oss from 'src/components/organisms/oss'

describe('Oss', () => {
  it('should be rendered correctlly', () => {
    render(<Oss />)
    expect(screen.getAllByText('貢献しているOSS')).toBeDefined()
  })
})
