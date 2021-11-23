/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react'

import Articles from 'src/components/organisms/articles'
import { ArticlesPagination } from 'src/types'

const mockPush = jest.fn()

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
  push: mockPush,
}))

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
    expect(mockPush).toBeCalledTimes(1)
  })
})
