/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import ReceptionForm from 'src/components/organisms/receptionForm'
import * as useCreateMessage from 'src/hooks/message'

const createMessage = jest.fn().mockImplementation(() => {
  return Promise.resolve(true)
})

const mockPush = jest.fn()

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
  push: mockPush,
}))

jest
  .spyOn(useCreateMessage, 'useCreateMessage')
  .mockImplementationOnce(() => {
    return {
      createMessage: createMessage,
      isLoading: false,
      error: null,
    }
  })
  .mockImplementationOnce(() => {
    return {
      createMessage: createMessage,
      isLoading: true,
      error: { status: 500, name: 'error', message: '' },
    }
  })
  .mockImplementationOnce(() => {
    return {
      createMessage: createMessage,
      isLoading: true,
      error: null,
    }
  })
  .mockImplementationOnce(() => {
    return {
      createMessage: createMessage,
      isLoading: false,
      error: null,
    }
  })
  .mockImplementationOnce(() => {
    return {
      createMessage: createMessage,
      isLoading: false,
      error: null,
    }
  })
  .mockImplementationOnce(() => {
    return {
      createMessage: createMessage,
      isLoading: true,
      error: null,
    }
  })

describe('ReceptionForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('to be rendered correctly', () => {
    render(<ReceptionForm />)
    expect(screen.getByPlaceholderText('sample@example.com')).toBeDefined()
    expect(screen.getByPlaceholderText('John Doe')).toBeDefined()
    expect(screen.getByPlaceholderText('Hello.')).toBeDefined()
    expect(screen.getByRole('button')).toBeDefined()
  })

  it('to be rendered correctly with api error status', () => {
    render(<ReceptionForm />)
    expect(screen.getByText('サーバーでエラーが発生しました')).toBeDefined()
  })

  it('to be rendered correctly with loading', () => {
    render(<ReceptionForm />)
    expect(screen.getByRole('button').textContent).toBe('送信中')
  })

  it('to be fired onSubmit with success status', async () => {
    render(<ReceptionForm />)
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
    await waitFor(() => {
      expect(mockPush).toBeCalledTimes(1)
    })
  })
})
