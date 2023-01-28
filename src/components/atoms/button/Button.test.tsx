import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from 'src/components/atoms/button'

describe('Button', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be rendered', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>button label</Button>)
    const buttonElement = screen.getByRole('button', { name: 'button label' })
    expect(buttonElement).toBeInTheDocument()
    await user.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
