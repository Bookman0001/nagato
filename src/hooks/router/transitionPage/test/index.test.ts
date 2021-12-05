/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react-hooks'

import { useTransitionPage } from 'src/hooks/router/transitionPage'

const mockPush = jest.fn()

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
  push: mockPush,
}))

describe('useTransitionPage', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('should return to top page', () => {
    const { result } = renderHook(() => useTransitionPage())
    result.current.transitionToTop()
    expect(mockPush).toBeCalledTimes(1)
    expect(mockPush).toBeCalledWith({ pathname: '/' })
  })

  it('should return to thanks page', () => {
    const { result } = renderHook(() => useTransitionPage())
    result.current.transitionToThanks()
    expect(mockPush).toBeCalledTimes(1)
    expect(mockPush).toBeCalledWith({ pathname: '/thanks' })
  })
})
