/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react'

import Header from 'src/components/organisms/header'

describe('Header', () => {
  it('should be rendered correctlly in default', () => {
    render(<Header />)
    expect(screen.getAllByText('日本語')).toBeDefined()
  })

  it('should be rendered correctlly in hideLangSwitch', () => {
    render(<Header hideLangSwitch />)
    expect(screen.queryByText('日本語')).toBe(null)
  })

  it('should event fired on clicking sharing', () => {
    render(<Header />)
    fireEvent.click(screen.getByAltText('share'))
    expect(screen.getByAltText('facebook')).toBeDefined()
    expect(screen.getByAltText('twitter')).toBeDefined()
  })
})
