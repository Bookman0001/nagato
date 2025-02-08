import { waitFor, renderHook } from '@testing-library/react'

import { useCreateMessage } from 'src/hooks/message/useCreateMessage'

jest.mock('src/repositories/client/message', () => ({
  ...jest.requireActual('src/repositories/client/message'),
  postMessage: () => {
    return { success: true }
  },
}))

describe('useCreateMessage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('to be submitted with true status', async () => {
    const { result } = renderHook(() => useCreateMessage())
    await waitFor(async () => {
      const { success } = await result.current.createMessage({
        email: '',
        name: '',
        content: 'test message',
      })
      expect(result.current.isLoading).toBe(false)
      expect(success).toBe(true)
    })
  })
})
