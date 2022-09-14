import { waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { useCreateMessage } from 'src/hooks/message'

jest.mock('src/repositories/client/message', () => ({
  ...jest.requireActual('src/repositories/client/message'),
  postMessage: () => Promise.resolve(),
}))

describe('useCreateMessage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('to be submitted with true status', async () => {
    await act(async () => {
      const { result } = renderHook(() => useCreateMessage())
      await waitFor(async () => {
        const success = await result.current.createMessage({
          email: '',
          name: '',
          content: 'test message',
        })
        expect(result.current.error).toBe(null)
        expect(result.current.isLoading).toBe(false)
        expect(success).toBe(true)
      })
    })
  })
})
