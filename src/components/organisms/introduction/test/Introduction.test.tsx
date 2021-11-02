/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import Introduction from 'src/components/organisms/introduction'
import 'src/locale/I18n'

describe('introduction', () => {
  it('should be rendered correctlly', () => {
    render(<Introduction />)
    expect(screen.getAllByText('Atlier')).toBeDefined()
  })
})
