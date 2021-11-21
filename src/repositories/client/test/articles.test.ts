/**
 * @jest-environment jsdom
 */
import fetchMock from 'fetch-mock'
import MockDate from 'mockdate'

import { fetchSearchedArticles } from 'src/repositories/client/articles'
import { ArticlesApiResponse, SearchParams } from 'src/types'

MockDate.set('2021-01-01')

const mockResponse = {
  contents: [
    {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: new Date(),
      title: 'title',
      description: 'description',
      content: 'content',
    },
  ],
  totalCount: 1,
  offset: 1,
  limit: 1,
} as ArticlesApiResponse

describe('fetchSearchedArticles', () => {
  it('to be sccusessful', async () => {
    fetchMock.post('http://localhost/api/articles', mockResponse)
    const data = await fetchSearchedArticles({ keyword: '' } as SearchParams)
    expect(data).toBeTruthy()
  })
})
