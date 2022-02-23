import {
  fetchAllArticles,
  fetchLimitedArtcles,
} from 'src/repositories/articles'

describe('fetchAllArticles', () => {
  it('to be fetched correctly', () => {
    return fetchAllArticles({ limit: 10, offset: 0 }).then((data) => {
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

describe('fetchLimitedArticles', () => {
  it('to be fetched correctly', () => {
    return fetchLimitedArtcles({ limit: 10 }).then((data) => {
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
