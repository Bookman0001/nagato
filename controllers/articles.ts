import { fetchArticles } from 'repositories/articles'
import { mappingArticles } from 'mapping/articles'
import { ArticlesApiResponse } from 'types'

export function ArticlesController() {
  const getArticles = async () => {
    return await fetchArticles().then((articles: ArticlesApiResponse) => {
      return mappingArticles(articles)
    })
  }

  return {
    getArticles,
  }
}
