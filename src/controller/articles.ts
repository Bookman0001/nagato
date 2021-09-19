import dayjs from 'dayjs'

import {
  fetchAllArticles,
  fetchLimitedArtcles,
} from 'src/repositories/articles'
import { fetchSearchedArticles } from 'src/repositories/client/articles'
import {
  ArticlesApiResponse,
  Argument,
  ArticleContents,
  SearchParams,
} from 'src/types'

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

export function articlesController() {
  const getAllArticleIds = async () => {
    const limit = 20
    let offset = 0
    let articleIds: string[] = []
    let isArticlesEmpty = false
    while (!isArticlesEmpty) {
      const response = await fetchAllArticles({ limit: limit, offset: offset })
      const { contents } = response
      const fetchedIds = contents.map((contents) => contents.id)
      if (!fetchedIds.length) {
        isArticlesEmpty = true
      } else {
        articleIds = [...articleIds, ...fetchedIds]
        offset = offset + limit
      }
    }
    return articleIds
  }

  const getLimitedArticles = async (argument: Argument) => {
    return await fetchLimitedArtcles(argument).then(
      (articles: ArticlesApiResponse) => {
        return mappingArticles(articles)
      }
    )
  }

  return {
    getAllArticleIds,
    getLimitedArticles,
  }
}

export function articlesClientController(searchParams: SearchParams) {
  const getSearchedArticles = async () => {
    return fetchSearchedArticles(searchParams).then(
      (artcles: ArticlesApiResponse) => {
        return mappingArticles(artcles)
      }
    )
  }

  return {
    getSearchedArticles,
  }
}
