/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/react'

import { useCanonicalLink } from 'src/hooks/canonicalLink'

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
  query: {
    keyword: 'test',
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
})
