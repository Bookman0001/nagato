/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/react'

import { useSearchParams } from 'src/hooks/searchParams'

const mockPush = jest.fn()

jest
  .spyOn(require('next/router'), 'useRouter')
  .mockImplementationOnce(() => ({
    query: {
      keyword: 'test',
      page: '2',
    },
    push: mockPush,
  }))
  .mockImplementationOnce(() => ({
    query: {
      keyword: undefined,
      page: undefined,
    },
    push: mockPush,
  }))
  .mockImplementation(() => ({
    query: {
      keyword: 'test',
      page: '2',
    },
    push: mockPush,
  }))

describe('useSearchParams', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('should be returned params', async () => {
    await act(async () => {
      const { result } = renderHook(() => useSearchParams())
      await waitFor(() =>
        expect(result.current.params).toEqual({ searchWord: 'test', page: '2' })
      )
    })
  })

  it('should be returned params with default', async () => {
    await act(async () => {
      const { result } = renderHook(() => useSearchParams())
      await waitFor(() =>
        expect(result.current.params).toEqual({ searchWord: '', page: '1' })
      )
    })
  })

  it('should be worked searchArticlesWithPager', async () => {
    const paginationIndex = 3
    await act(async () => {
      const { result } = renderHook(() => useSearchParams())
      await waitFor(() => {
        result.current.searchArticlesWithPager(paginationIndex)
        expect(mockPush).toBeCalledTimes(1)
      })
    })
  })

  it('should be worked searchArticlesWithKeyword', async () => {
    const keyword = 'dummy'
    await act(async () => {
      const { result } = renderHook(() => useSearchParams())
      await waitFor(() => {
        result.current.searchArticlesWithKeyword(keyword)
        expect(mockPush).toBeCalledTimes(1)
      })
    })
  })
})
