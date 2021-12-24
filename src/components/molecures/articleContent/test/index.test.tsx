import { render, screen } from '@testing-library/react'

import ArticleContent from 'src/components/molecures/articleContent'
import { Article } from 'src/types'

describe('ArticleContent', () => {
  it('should be rendered with onChange', () => {
    const article: Article = {
      id: 'aa1',
      title: 'title',
      publishedAt: '2021-01-01',
      content: 'content',
      description: 'description',
    }
    render(<ArticleContent article={article} />)
    expect(screen.getAllByText('title')).toBeDefined()
    expect(screen.getAllByText('2021-01-01')).toBeDefined()
  })
})
