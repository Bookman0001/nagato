import dayjs from 'dayjs'

import { fetchAllArticles, fetchLimitedArtcles } from 'repositories/articles'
import { ArticlesApiResponse, Argument, ArticleContents } from 'types'

function mappingArticles(response: ArticlesApiResponse): ArticleContents {
  const { contents, totalCount, offset, limit } = response
  const mappedContents = contents.map((article) => {
    const { id, publishedAt, title, description, content } = article
    return {
      id,
      publishedAt: dayjs(publishedAt).format('YYYY/MM/DD'),
      title,
      description,
      content,
    }
  })
  return {
    contents: mappedContents,
    totalCount,
    offset,
    limit,
  }
}

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
