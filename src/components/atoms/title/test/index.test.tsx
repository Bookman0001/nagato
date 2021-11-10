/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import Title from 'src/components/atoms/title'

describe('Title', () => {
  it('should be rendered', () => {
    render(<Title>{'test title'}</Title>)
    expect(screen.getByText('test title')).toBeDefined()
  })
})
