import { fetchArticle, fetchDraftArticle } from 'src/repositories/article'

describe('fetchArticle', () => {
  it('to be fetched correctly', async () => {
    return fetchArticle('test').then((data) => {
      expect(data).toEqual({
        id: '1',
        publishedAt: '1991-01-01',
        title: 'test title',
        description: 'test description',
        content: '<p>test content</p>',
      })
    })
  })

  it('to be fetched correctly in draft', async () => {
    return fetchDraftArticle({ id: 'draft', draftKey: 'testKey' }).then(
      (data) => {
        expect(data).toEqual({
          id: '1',
          title: 'test title',
          description: 'test description',
          content: '<p>test content</p>',
        })
      }
    )
  })
})
