import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TextArea } from 'src/components/atoms/form'

describe('TextArea', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be rendered with onChange', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()
    render(
      <TextArea
        defaultValue={'default value'}
        placeholder={'dummy place holder'}
        onChange={handleChange}
      />
    )
    await user.click(screen.getByPlaceholderText('dummy place holder'))
    await user.keyboard('React Go.{enter}')
    expect(handleChange).toHaveBeenCalledTimes(10)
  })
})
