import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Select } from 'src/components/atoms/form'

describe('Select', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be rendered with onChange', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()
    render(
      <Select defaultValue={'default value'} onChange={handleChange}>
        <>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </>
      </Select>
    )
    await user.selectOptions(screen.getByRole('combobox'), '2')
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
