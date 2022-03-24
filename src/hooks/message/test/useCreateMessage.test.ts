import { waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { useCreateMessage } from 'src/hooks/message'
import * as postMessage from 'src/repositories/client/message'

jest
  .spyOn(postMessage, 'postMessage')
  .mockImplementationOnce(() => {
    return Promise.resolve()
  })
  .mockImplementationOnce(() => {
    return Promise.reject(new TypeError('something error happened'))
  })

describe('useCreateMessage', () => {
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

  it('to be submitted with false status', async () => {
    await act(async () => {
      const { result } = renderHook(() => useCreateMessage())
      await waitFor(async () => {
        const success = await result.current.createMessage({
          email: '',
          name: '',
          content: 'test message',
        })
        expect(result.current.error).not.toBe(null)
        expect(result.current.isLoading).toBe(false)
        expect(success).toBe(false)
      })
    })
  })
})
