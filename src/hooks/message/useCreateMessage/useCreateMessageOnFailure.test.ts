import { waitFor, renderHook } from '@testing-library/react'

import { useCreateMessage } from 'src/hooks/message/useCreateMessage'

vi.mock('src/repositories/client/message', () => ({
  ...vi.importActual('src/repositories/client/message'),
  postMessage: () => {
    return { success: false }
  },
}))

describe('useCreateMessage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('to be submitted with false status', async () => {
    const { result } = renderHook(() => useCreateMessage())
    await waitFor(async () => {
      const { success } = await result.current.createMessage({
        email: '',
        name: '',
        content: 'test message',
      })
      expect(result.current.isLoading).toBe(false)
      expect(success).toBe(false)
    })
  })
})
