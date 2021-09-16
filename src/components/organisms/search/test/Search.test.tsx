/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import Search from 'src/components/organisms/search'

describe('Search', () => {
  it('should be rendered correctlly', () => {
    render(<Search defaultSearchWord={'Next.js'} />)
    expect(screen.getByDisplayValue('Next.js'))
  })
})
