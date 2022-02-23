import { articleController } from 'src/controllers/article'

describe('articleController', () => {
  it('should be fetched correctly', () => {
    const { getArticle } = articleController()
    const articleId = 'test'

    return getArticle(articleId).then((data) => {
      expect(data).toEqual({
        id: '1',
        publishedAt: '1991/01/01',
        title: 'test title',
        description: 'test description',
        content: '<p>test content</p>',
      })
    })
  })
})
