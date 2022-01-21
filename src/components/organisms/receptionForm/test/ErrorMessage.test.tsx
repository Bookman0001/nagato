import { render, screen } from '@testing-library/react'

import { ErrorMessage } from 'src/components/organisms/receptionForm/ErrorMessage'

describe('ErrorMessage', () => {
  it('to be rendered correctly with email required error', () => {
    render(<ErrorMessage name={'email'} error={{ type: 'required' }} />)
    expect(screen.getByText('必須です')).toBeDefined()
  })

  it('to be rendered correctly with pattern error', () => {
    render(<ErrorMessage name={'email'} error={{ type: 'pattern' }} />)
    expect(screen.getByText('メールアドレスの形式が不正です')).toBeDefined()
  })

  it('to be rendered correctly with name required error', () => {
    render(<ErrorMessage name={'name'} error={{ type: 'required' }} />)
    expect(screen.getByText('必須です')).toBeDefined()
  })

  it('to be rendered correctly with content required error', () => {
    render(<ErrorMessage name={'content'} error={{ type: 'required' }} />)
    expect(screen.getByText('必須です')).toBeDefined()
  })
})
