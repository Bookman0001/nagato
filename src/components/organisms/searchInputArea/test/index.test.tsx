import { render, screen, fireEvent } from '@testing-library/react'
import { waitFor } from '@testing-library/dom'

import SearchInputArea from 'src/components/organisms/searchInputArea'

const mockPush = jest.fn()

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
  query: {
    keyword: 'test',
    page: '1',
  },
  push: mockPush,
}))

describe('Search', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('should be rendered correctlly', () => {
    render(<SearchInputArea defaultKeyword={'test'} />)
    expect(screen.getByDisplayValue('test')).toBeDefined()
  })

  it('should be onChange worked', async () => {
    render(<SearchInputArea defaultKeyword={'test'} />)
    fireEvent.change(screen.getByPlaceholderText('keyword'), {
      target: { value: 'React Go.' },
    })
    await waitFor(() => {
      expect(screen.getByDisplayValue('React Go.')).toBeDefined()
    })
  })

  it('should be onKeyPress worked', async () => {
    render(<SearchInputArea defaultKeyword={'test'} />)
    fireEvent.keyDown(screen.getByPlaceholderText('keyword'), {
      key: 'Enter',
      code: 13,
    })
    await waitFor(() => {
      expect(mockPush).toBeCalledTimes(1)
    })
  })

  it('should not to be onKeyPress worked', async () => {
    render(<SearchInputArea defaultKeyword={'test'} />)
    fireEvent.keyDown(screen.getByPlaceholderText('keyword'), {
      key: 'Escape',
      code: 27,
    })
    await waitFor(() => {
      expect(mockPush).toBeCalledTimes(0)
    })
  })

  it('should be onClick worked', async () => {
    render(<SearchInputArea defaultKeyword={'test'} />)
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(mockPush).toBeCalledTimes(1)
    })
  })
})
