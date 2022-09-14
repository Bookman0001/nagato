import { render, screen, fireEvent } from '@testing-library/react'

import type { ArticlesPagination } from 'src/types'

import { Articles } from 'src/components/organisms/searchedArticles'

const mockedClick = jest.fn()
const mockSearch = jest.fn()

jest.mock('src/hooks/router/searchParams', () => ({
  ...jest.requireActual('src/hooks/router/searchParams'),
  useSearchParams: () => {
    return {
      params: { keyword: '', page: '1' },
      searchArticlesWithPager: mockSearch,
      searchArticlesWithKeyword: jest.fn(),
    }
  },
}))

describe('SearchedArticles', () => {
  beforeEach(() => {
    mockedClick.mockClear()
    mockSearch.mockClear()
  })
  it('should be rendered correctlly with data', () => {
    const emptyArticles: ArticlesPagination = {
      contents: [
        {
          id: 'dummy',
          description: 'dummy description',
          publishedAt: '2021-01-01',
          title: 'dummy title',
          content: '',
        },
      ],
      totalCount: 1,
      offset: 0,
      limit: 10,
    }
    render(<Articles articles={emptyArticles} currentIndex={1} />)
    expect(screen.getAllByText('dummy title')).toBeDefined()
    expect(screen.getAllByText('2021-01-01')).toBeDefined()
  })

  it('should be rendered correctlly with nothing data', () => {
    const emptyArticles: ArticlesPagination = {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: 0,
    }
    render(<Articles articles={emptyArticles} currentIndex={1} />)
    expect(screen.getAllByText('No Result!')).toBeDefined()
  })

  it('should be worked onClick', () => {
    const emptyArticles: ArticlesPagination = {
      contents: [
        {
          id: 'dummy',
          description: 'dummy description',
          publishedAt: '2021-01-01',
          title: 'dummy title',
          content: '',
        },
      ],
      totalCount: 1,
      offset: 0,
      limit: 10,
    }
    render(<Articles articles={emptyArticles} currentIndex={1} />)
    fireEvent.click(screen.getByText('1'))
    expect(mockSearch).toBeCalledTimes(1)
  })
})
