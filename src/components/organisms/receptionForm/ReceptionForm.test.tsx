import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import singletonRouter from 'next/router'

import { ReceptionForm } from 'src/components/organisms/receptionForm'

jest.mock('next/router', () => require('next-router-mock'))

jest.mock('src/hooks/message/useCreateMessage', () => ({
  ...jest.requireActual('src/hooks/message/useCreateMessage'),
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
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getAllByText('必須です')).toBeDefined()
    })
  })

  it('to be valid validation in email', async () => {
    fireEvent.change(screen.getByLabelText('メールアドレス'), {
      target: { value: 'test@test' },
    })
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByText('メールアドレスの形式が不正です')).toBeDefined()
    })
  })

  it('to be valid validation in name', async () => {
    fireEvent.change(screen.getByLabelText('名前'), {
      target: {
        value:
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      },
    })
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByText('最大文字数は100文字です')).toBeDefined()
    })
  })

  it('to be recovered error status', async () => {
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getAllByText('必須です')).toBeDefined()
    })
    fireEvent.change(screen.getByLabelText('メールアドレス'), {
      target: { value: 'sample@example.com' },
    })
    fireEvent.change(screen.getByLabelText('名前'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText('メッセージ内容'), {
      target: { value: 'Hello.' },
    })
    await waitFor(() => {
      expect(screen.queryByText('必須です')).toBe(null)
    })
  })

  it('to be fired onSubmit with success status', async () => {
    fireEvent.change(screen.getByLabelText('メールアドレス'), {
      target: { value: 'sample@example.com' },
    })
    fireEvent.change(screen.getByLabelText('名前'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText('メッセージ内容'), {
      target: { value: 'Hello.' },
    })
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(singletonRouter.asPath).toBe('/thanks')
    })
  })
})
