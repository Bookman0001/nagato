/**
 * @jest-environment jsdom
 */
import fetchMock from 'fetch-mock'

import { fetchSearchedArticles } from 'src/repositories/client/articles'
import { ArticlesResponse, SearchParams } from 'src/types'

const mockResponse = {
  contents: [
    {
      id: '1',
      createdAt: '1995-05-01',
      updatedAt: '1995-05-01',
      publishedAt: '1995-05-01',
      title: 'title',
      description: 'description',
      content: 'content',
    },
  ],
  totalCount: 1,
  offset: 1,
  limit: 1,
} as ArticlesResponse

describe('fetchSearchedArticles', () => {
  it('to be sccusessful', async () => {
    fetchMock.post('http://localhost/api/articles', mockResponse)
    const data = await fetchSearchedArticles({ keyword: '' } as SearchParams)
    expect(data).toBeTruthy()
  })
})
