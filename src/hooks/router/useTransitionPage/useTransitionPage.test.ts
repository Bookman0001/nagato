import { renderHook } from '@testing-library/react-hooks'

import { useTransitionPage } from 'src/hooks/router/useTransitionPage'

const mockPush = jest.fn()

// eslint-disable-next-line @typescript-eslint/no-require-imports
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
    expect(mockPush).toHaveBeenCalledTimes(1)
    expect(mockPush).toHaveBeenCalledWith({ pathname: '/' })
  })

  it('should return to thanks page', () => {
    const { result } = renderHook(() => useTransitionPage())
    result.current.transitionToThanks()
    expect(mockPush).toHaveBeenCalledTimes(1)
    expect(mockPush).toHaveBeenCalledWith({ pathname: '/thanks' })
  })
})
