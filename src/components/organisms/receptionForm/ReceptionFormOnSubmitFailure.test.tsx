import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'

import { ReceptionForm } from 'src/components/organisms/receptionForm'

jest.mock('next/router', () => require('next-router-mock'))

jest.mock('src/hooks/message', () => ({
  ...jest.requireActual('src/hooks/message'),
  useCreateMessage: () => {
    return {
      createMessage: () => Promise.resolve(false),
      isLoading: false,
      error: {},
    }
  },
}))

describe('ReceptionForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    render(<ReceptionForm />)
  })

  it('to be fired onSubmit with failed status', async () => {
    await act(() => {
      fireEvent.change(screen.getByPlaceholderText('sample@example.com'), {
        target: { value: 'sample@example.com' },
      })
      fireEvent.change(screen.getByPlaceholderText('John Doe'), {
        target: { value: 'John Doe' },
      })
      fireEvent.change(screen.getByPlaceholderText('Hello.'), {
        target: { value: 'Hello.' },
      })
      fireEvent.click(screen.getByRole('button'))
    })
    await waitFor(() => {
      expect(screen.getByText('サーバーでエラーが発生しました')).toBeDefined()
    })
  })
})
