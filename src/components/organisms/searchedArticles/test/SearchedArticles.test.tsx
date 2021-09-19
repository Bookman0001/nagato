/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import SearchedArticles from 'src/components/organisms/searchedArticles'
import { ArticleContents } from 'src/types'

const mockedClick = jest.fn()

describe('SearchedArticles', () => {
  beforeEach(() => {
    mockedClick.mockClear()
  })
  it('should be rendered correctlly with data', () => {
    const emptyArticles: ArticleContents = {
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
    render(
      <SearchedArticles
        articles={emptyArticles}
        onClick={mockedClick}
        currentIndex={1}
      />
    )
    expect(screen.getAllByText('dummy title'))
    expect(screen.getAllByText('2021-01-01'))
  })

  it('should be rendered correctlly with nothing data', () => {
    const emptyArticles: ArticleContents = {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: 0,
    }
    render(
      <SearchedArticles
        articles={emptyArticles}
        onClick={mockedClick}
        currentIndex={1}
      />
    )
    expect(screen.getAllByText('No Result!'))
  })
})
