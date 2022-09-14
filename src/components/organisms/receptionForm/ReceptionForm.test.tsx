import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'

import { ReceptionForm } from 'src/components/organisms/receptionForm'

const mockPush = jest.fn()

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
  push: mockPush,
}))

jest.mock('src/hooks/message', () => ({
  ...jest.requireActual('src/hooks/message'),
  useCreateMessage: () => {
    return {
      createMessage: () => Promise.resolve(true),
      isLoading: false,
      error: null,
    }
  },
}))

describe('ReceptionForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    render(<ReceptionForm />)
  })

  it('to be valid validation in empty input', async () => {
    await act(() => {
      fireEvent.click(screen.getByRole('button'))
    })
    await waitFor(() => {
      expect(screen.getAllByText('必須です')).toBeDefined()
    })
  })

  it('to be valid validation in email', async () => {
    await act(() => {
      fireEvent.change(screen.getByPlaceholderText('sample@example.com'), {
        target: { value: 'test@test' },
      })
      fireEvent.click(screen.getByRole('button'))
    })
    await waitFor(() => {
      expect(screen.getByText('メールアドレスの形式が不正です')).toBeDefined()
    })
  })

  it('to be fired onSubmit with success status', async () => {
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
      expect(mockPush).toBeCalledTimes(1)
    })
  })
})
