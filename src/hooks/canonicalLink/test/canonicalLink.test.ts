import { waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { useCanonicalLink } from 'src/hooks/canonicalLink'

jest
  .spyOn(require('next/router'), 'useRouter')
  .mockImplementationOnce(() => ({
    query: {
      keyword: 'test',
    },
  }))
  .mockImplementationOnce(() => ({
    query: {
      keyword: 'test',
    },
  }))
  .mockImplementationOnce(() => ({
    query: {
      keyword: undefined,
    },
  }))
  .mockImplementationOnce(() => ({
    query: {
      keyword: undefined,
    },
  }))

describe('useCanonicalLink', () => {
  it('should be returned canonicalLink with keyword', async () => {
    await act(async () => {
      const { result } = renderHook(() => useCanonicalLink())
      await waitFor(() => {
        expect(result.current.canonicalLink).toBe('/posts?keyword=test')
      })
    })
  })

  it('should be returned canonicalLink with default', async () => {
    await act(async () => {
      const { result } = renderHook(() => useCanonicalLink())
      await waitFor(() => {
        expect(result.current.canonicalLink).toBe('http://localhost/posts')
      })
    })
  })
})
