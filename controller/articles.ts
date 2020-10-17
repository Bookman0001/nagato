import { fetchArticles } from 'repositories/articles'
import { mappingArticles } from 'mapping/articles'
import { ArticleResponse } from 'types'

export function ArticlesController() {
  const getArticles = async () => {
    return await fetchArticles().then((articles: ArticleResponse[]) => {
      return mappingArticles(articles)
    })
  }

  return {
    getArticles,
  }
}
