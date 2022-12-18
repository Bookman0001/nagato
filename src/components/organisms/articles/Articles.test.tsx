import { render, screen, fireEvent } from '@testing-library/react'
import singletonRouter from 'next/router'

import { Articles } from 'src/components/organisms/articles'
import type { ArticlesPagination } from 'src/types'

jest.mock('next/router', () => require('next-router-mock'))

const articles: ArticlesPagination = {
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

describe('Articles', () => {
  it('should be rendered correctlly with data', () => {
    render(<Articles articles={articles} />)
    expect(screen.getAllByText('dummy title')).toBeDefined()
    expect(screen.getAllByText('2021-01-01')).toBeDefined()
  })

  it('click event should be occured', () => {
    render(<Articles articles={articles} />)
    fireEvent.click(screen.getByRole('button'))
    expect(singletonRouter.asPath).toBe('/posts')
  })
})
