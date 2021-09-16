/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import MockDate from 'mockdate'

import Footer from 'src/components/organisms/footer'

MockDate.set('2021-01-01')
describe('Footer', () => {
  it('should be rendered correctlly', () => {
    render(<Footer />)
    expect(screen.getAllByText('© 2021 k-puppeteer.com'))
  })
})
