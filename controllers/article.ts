import { fetchArticle } from 'repositories/article'
import { mappingArticle } from 'mapping/article'
import { ArticleResponse } from 'types'

export function useArticle() {
  const getArticle = async (articleId: string) => {
    return await fetchArticle(articleId).then((article: ArticleResponse) => {
      return mappingArticle(article)
    })
  }

  return {
    getArticle,
  }
}
