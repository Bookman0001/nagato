import { waitFor, renderHook } from '@testing-library/react'

import { useCanonicalLink } from 'src/hooks/seo/useCanonicalLink'

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
    const { result } = renderHook(() => useCanonicalLink())
    await waitFor(() => {
      expect(result.current.canonicalLink).toBe('/posts?keyword=test')
    })
  })

  it('should be returned canonicalLink with default', async () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      query: {
        keyword: undefined,
      },
    }))
    const { result } = renderHook(() => useCanonicalLink())
    await waitFor(() => {
      expect(result.current.canonicalLink).toBe('http://localhost/posts')
    })
  })
})
