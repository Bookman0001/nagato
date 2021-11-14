/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react'

import Button from 'src/components/atoms/button'

describe('Button', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be rendered', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>button label</Button>)
    expect(screen.getByRole('button').textContent).toBe('button label')
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
