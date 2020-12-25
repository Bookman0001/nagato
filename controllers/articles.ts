import { fetchAllArticles, fetchLimitedArtcles } from 'repositories/articles'
import { mappingArticles } from 'mapping/articles'
import { ArticlesApiResponse, Argument } from 'types'

export function useArticles() {
  const getAllArticles = async () => {
    return await fetchAllArticles().then((articles: ArticlesApiResponse) => {
      return mappingArticles(articles)
    })
  }

  const getLimitedArticles = async (argument: Argument) => {
    return await fetchLimitedArtcles(argument).then(
      (articles: ArticlesApiResponse) => {
        return mappingArticles(articles)
      }
    )
  }

  return {
    getAllArticles,
    getLimitedArticles,
  }
}
