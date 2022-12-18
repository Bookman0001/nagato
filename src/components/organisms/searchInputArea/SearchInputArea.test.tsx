import { waitFor } from '@testing-library/dom'
import { render, screen, fireEvent } from '@testing-library/react'
import singletonRouter from 'next/router'

import { SearchInputArea } from 'src/components/organisms/searchInputArea'

jest.mock('next/router', () => require('next-router-mock'))

describe('Search', () => {
  beforeEach(() => {
    jest.clearAllMocks()
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
      expect(singletonRouter.asPath).toBe('/posts?keyword=test')
    })
  })

  it('should not to be onKeyPress worked', async () => {
    render(<SearchInputArea defaultKeyword={'test'} />)
    fireEvent.keyDown(screen.getByPlaceholderText('keyword'), {
      key: 'Escape',
      code: 27,
    })
    await waitFor(() => {
      expect(singletonRouter.asPath).toBe('/posts?keyword=test')
    })
  })

  it('should be onClick worked', async () => {
    render(<SearchInputArea defaultKeyword={'test'} />)
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(singletonRouter.asPath).toBe('/posts?keyword=test')
    })
  })
})
