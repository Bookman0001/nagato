import dayjs from 'dayjs'

import type {
  ArticlesResponse,
  PaginationParams,
  ArticlesPagination,
  SearchParams,
} from 'src/types'

import {
  fetchAllArticles,
  fetchLimitedArtcles,
} from 'src/repositories/articles'
import { fetchSearchedArticles } from 'src/repositories/client/articles'

function mappingArticles(response: ArticlesResponse): ArticlesPagination {
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
    const pager: { readonly limit: 20; offset: number } = {
      limit: 20,
      offset: 0,
    }
    let totalArticleIds: string[] = []
    let isArticlesEmpty = false

    while (!isArticlesEmpty) {
      const fetchedIds = (
        await fetchAllArticles({ limit: pager.limit, offset: pager.offset })
      ).contents.map((contents) => contents.id)

      if (!fetchedIds.length) {
        isArticlesEmpty = true
      } else {
        totalArticleIds = [...totalArticleIds, ...fetchedIds]
        pager.offset = pager.offset + pager.limit
      }
    }
    return totalArticleIds
  }

  const getLimitedArticles = async (params: PaginationParams) => {
    return await fetchLimitedArtcles(params).then((articles) => {
      return mappingArticles(articles)
    })
  }

  return {
    getAllArticleIds,
    getLimitedArticles,
  }
}

export function articlesClientController(searchParams: SearchParams) {
  const getSearchedArticles = async () => {
    return fetchSearchedArticles(searchParams).then((artcles) => {
      return mappingArticles(artcles)
    })
  }

  return {
    getSearchedArticles,
  }
}
