import {
  articleController,
  draftArticleController,
} from 'src/controllers/article'

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

  it('should be fetched correctly in draft', () => {
    const { getDraftArticle } = draftArticleController()
    return getDraftArticle({ id: 'draft', draftKey: 'testKey' }).then(
      (data) => {
        expect(data).toEqual({
          id: '1',
          publishedAt: '',
          title: 'test title',
          description: 'test description',
          content: '<p>test content</p>',
        })
      }
    )
  })
})
