import { render, screen, fireEvent } from '@testing-library/react'

import Select from 'src/components/atoms/form/select'

describe('Select', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be rendered with onChange', () => {
    const handleChange = jest.fn()
    render(
      <Select defaultValue={'default value'} onChange={handleChange}>
        <>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </>
      </Select>
    )
    expect(screen.getByRole('combobox')).toBeDefined()
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 2 } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
