import { render, screen, fireEvent } from '@testing-library/react'

import TextArea from 'src/components/atoms/form/textArea'

describe('TextArea', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be rendered with onChange', () => {
    const handleChange = jest.fn()
    render(
      <TextArea
        defaultValue={'default value'}
        placeholder={'dummy place holder'}
        onChange={handleChange}
      />
    )
    expect(screen.getByPlaceholderText('dummy place holder')).toBeDefined()
    fireEvent.change(screen.getByPlaceholderText('dummy place holder'), {
      target: { value: 'React Go.' },
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
