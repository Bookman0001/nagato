/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react'

import SearchInput from 'src/components/atoms/searchInput'

describe('SearchInput', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be rendered with onChange', () => {
    const handleChange = jest.fn()
    render(
      <SearchInput
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

  it('should be rendered with onKeyDown', () => {
    const handleChange = jest.fn()
    const handleKeyDown = jest.fn()
    render(
      <SearchInput
        defaultValue={'default value'}
        placeholder={'dummy place holder'}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    )
    expect(screen.getByPlaceholderText('dummy place holder')).toBeDefined()
    fireEvent.change(screen.getByPlaceholderText('dummy place holder'), {
      target: { value: 'React Go.' },
    })
    fireEvent.keyDown(screen.getByPlaceholderText('dummy place holder'), {
      key: 'Enter',
      code: 13,
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleKeyDown).toHaveBeenCalledTimes(1)
  })
})
