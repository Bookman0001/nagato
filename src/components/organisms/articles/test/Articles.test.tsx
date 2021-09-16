/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import Articles from 'src/components/organisms/articles'
import { ArticleContents } from 'src/types'

describe('Articles', () => {
  it('should be rendered correctlly with data', () => {
    const emptyArticles: ArticleContents = {
      contents: [
        {
          id: 'dummy',
          description: 'dummy description',
          publishedAt: '2021-01-01',
          title: 'dummy title',
          content: 'contents',
        },
      ],
      totalCount: 0,
      offset: 0,
      limit: 0,
    }
    render(<Articles articles={emptyArticles} />)
    expect(screen.getAllByText('dummy title'))
    expect(screen.getAllByText('2021-01-01'))
  })
})
