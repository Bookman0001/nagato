import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from 'src/components/atoms/form'

describe('Input', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be rendered with onChange', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()
    render(
      <Input
        defaultValue={'default value'}
        placeholder={'dummy place holder'}
        onChange={handleChange}
      />
    )
    await user.click(screen.getByPlaceholderText('dummy place holder'))
    await user.keyboard('React Go.')
    expect(handleChange).toHaveBeenCalledTimes(9)
  })

  it('should be rendered with onKeyDown', async () => {
    const handleChange = jest.fn()
    const handleKeyDown = jest.fn()
    const user = userEvent.setup()
    render(
      <Input
        defaultValue={'default value'}
        placeholder={'dummy place holder'}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    )
    await user.click(screen.getByPlaceholderText('dummy place holder'))
    await user.keyboard('React Go.{enter}')
    expect(handleChange).toHaveBeenCalledTimes(9)
    expect(handleKeyDown).toHaveBeenCalledTimes(10)
  })
})
