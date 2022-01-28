import { renderHook } from '@testing-library/react-hooks'

import { usePagination } from '../usePagination'

describe('usePagination', () => {
  it('to be returned array in total count is 1', () => {
    const { result } = renderHook(() =>
      usePagination({ currentIndex: 1, totalCount: 1, limit: 10 })
    )
    const array = result.current.getDisplayPaginations()
    expect(array).toEqual([1])
  })

  it('to be returned array in total count is 30', () => {
    const { result } = renderHook(() =>
      usePagination({ currentIndex: 1, totalCount: 30, limit: 10 })
    )
    const array = result.current.getDisplayPaginations()
    expect(array).toEqual([1, 2, 3])
  })

  it('to be returned array in total count is 30 and currentIndex is 3', () => {
    const { result } = renderHook(() =>
      usePagination({ currentIndex: 3, totalCount: 30, limit: 10 })
    )
    const array = result.current.getDisplayPaginations()
    expect(array).toEqual([1, 2, 3])
  })

  it('to be returned array in total count is 50', () => {
    const { result } = renderHook(() =>
      usePagination({ currentIndex: 1, totalCount: 50, limit: 10 })
    )
    const array = result.current.getDisplayPaginations()
    expect(array).toEqual([1, 2, 3, 4, 5])
  })

  it('to be returned array in total count is 100 and currentIndex is 5', () => {
    const { result } = renderHook(() =>
      usePagination({ currentIndex: 5, totalCount: 100, limit: 10 })
    )
    const array = result.current.getDisplayPaginations()
    expect(array).toEqual([2, 3, 4, 5, 6, 7, 8])
  })

  it('to be returned array in total count is 100 and currentIndex is 9', () => {
    const { result } = renderHook(() =>
      usePagination({ currentIndex: 9, totalCount: 100, limit: 10 })
    )
    const array = result.current.getDisplayPaginations()
    expect(array).toEqual([4, 5, 6, 7, 8, 9, 10])
  })

  it('to be returned array in total count is 100 and currentIndex is 10', () => {
    const { result } = renderHook(() =>
      usePagination({ currentIndex: 10, totalCount: 100, limit: 10 })
    )
    const array = result.current.getDisplayPaginations()
    expect(array).toEqual([4, 5, 6, 7, 8, 9, 10])
  })
})
