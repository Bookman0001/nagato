import { waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { useCanonicalLink } from 'src/hooks/canonicalLink'

describe('useCanonicalLink', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be returned canonicalLink with keyword', async () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      query: {
        keyword: 'test',
      },
    }))
    await act(async () => {
      const { result } = renderHook(() => useCanonicalLink())
      await waitFor(() => {
        expect(result.current.canonicalLink).toBe('/posts?keyword=test')
      })
    })
  })

  it('should be returned canonicalLink with default', async () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      query: {
        keyword: undefined,
      },
    }))
    await act(async () => {
      const { result } = renderHook(() => useCanonicalLink())
      await waitFor(() => {
        expect(result.current.canonicalLink).toBe('http://localhost/posts')
      })
    })
  })
})
