import { waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { useSearchParams } from 'src/hooks/router/searchParams'

const mockPush = jest.fn()

describe('useSearchParams', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('should be returned params', async () => {
    jest
      .spyOn(require('next/router'), 'useRouter')
      .mockImplementationOnce(() => ({
        query: {
          keyword: 'test',
          page: '2',
        },
        push: mockPush,
      }))
    await act(async () => {
      const { result } = renderHook(() => useSearchParams())
      await waitFor(() =>
        expect(result.current.params).toEqual({ keyword: 'test', page: '2' })
      )
    })
  })

  it('should be returned params with default', async () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      query: {
        keyword: undefined,
        page: undefined,
      },
      push: mockPush,
    }))
    await act(async () => {
      const { result } = renderHook(() => useSearchParams())
      await waitFor(() =>
        expect(result.current.params).toEqual({ keyword: '', page: '1' })
      )
    })
  })

  it('should be worked searchArticlesWithPager', async () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      query: {
        keyword: 'test',
        page: '2',
      },
      push: mockPush,
    }))
    const paginationIndex = 3
    await act(async () => {
      const { result } = renderHook(() => useSearchParams())
      await waitFor(() => {
        result.current.searchArticlesWithPager(paginationIndex)
        expect(mockPush).toHaveBeenCalledTimes(1)
      })
    })
  })

  it('should be worked searchArticlesWithKeyword', async () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      query: {
        keyword: 'test',
        page: '2',
      },
      push: mockPush,
    }))
    const keyword = 'dummy'
    await act(async () => {
      const { result } = renderHook(() => useSearchParams())
      await waitFor(() => {
        result.current.searchArticlesWithKeyword(keyword)
        expect(mockPush).toHaveBeenCalledTimes(1)
      })
    })
  })
})
