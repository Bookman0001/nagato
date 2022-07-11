import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import { ReceptionForm } from 'src/components/organisms/receptionForm'
import * as useCreateMessage from 'src/hooks/message'

const mockPush = jest.fn()

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
  push: mockPush,
}))

const createMessage = jest.fn().mockImplementation(() => {
  return Promise.resolve(true)
})

jest.spyOn(useCreateMessage, 'useCreateMessage').mockImplementation(() => {
  return {
    createMessage: createMessage,
    isLoading: false,
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
