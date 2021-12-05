/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import Label from 'src/components/atoms/form/label'

describe('Label', () => {
  it('to be rendered correctly', () => {
    render(<Label>label item</Label>)
    expect(screen.getByText('label item')).toBeDefined()
  })
})
