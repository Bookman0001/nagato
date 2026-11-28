import { fetchArticlesIds, fetchLatestArtcles } from 'src/repositories/articles'

describe('fetchArticlesIds', () => {
  // FIX ME: adapt to the query mode.
  it('to be fetched correctly', () => {
    return fetchArticlesIds({ limit: 10, offset: 0 }).then((data) => {
      expect(data).toEqual([
        {
          id: '1',
          publishedAt: '1991-01-01',
          title: 'test title',
          description: 'test description',
          content: '<p>test content</p>',
        },
        {
          id: '2',
          publishedAt: '1991-01-01',
          title: 'test title',
          description: 'test description',
          content: '<p>test content</p>',
        },
      ])
    })
  })
})

describe('fetchLatestArtcles', () => {
  it('to be fetched correctly', () => {
    return fetchLatestArtcles({ limit: 10 }).then((data) => {
      expect(data).toEqual([
        {
          id: '1',
          publishedAt: '1991-01-01',
          title: 'test title',
          description: 'test description',
          content: '<p>test content</p>',
        },
        {
          id: '2',
          publishedAt: '1991-01-01',
          title: 'test title',
          description: 'test description',
          content: '<p>test content</p>',
        },
      ])
    })
  })
})
