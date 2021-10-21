/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import EnginnerCareer from 'src/components/organisms/enginnerCareer'

describe('enginnerCareer', () => {
  it('should be rendered correctlly', () => {
    render(<EnginnerCareer />)
    expect(screen.getAllByText('Career')).toBeDefined()
  })
})
