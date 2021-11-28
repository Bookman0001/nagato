/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react-hooks'

import { useBackToPage } from 'src/hooks/router/backToPage'

const mockPush = jest.fn()

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
  push: mockPush,
}))

describe('useBackToPage', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('should return to top page', () => {
    const { result } = renderHook(() => useBackToPage())
    result.current.backToTop()
    expect(mockPush).toBeCalledTimes(1)
    expect(mockPush).toBeCalledWith({ pathname: '/' })
  })
})
