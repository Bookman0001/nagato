import dayjs from 'dayjs'
import { fetchLatestArtcles } from 'src/repositories/articles'
import { fetchArticlesIds } from 'src/repositories/articles/articles'
import { fetchSearchedArticles } from 'src/repositories/client/articles'
import type {
  ArticlesResponse,
  PaginationParams,
  ArticlesPagination,
} from 'src/types'
import type { SearchParams } from 'src/utils/zod/searchParams'

function mappingArticles(response: ArticlesResponse): ArticlesPagination {
  const { contents, totalCount, offset, limit } = response
  const mappedContents = contents.map((article) => {
    const { id, publishedAt, title, description } = article
    return {
      id,
      publishedAt: dayjs(publishedAt).format('YYYY/MM/DD'),
      title,
      description,
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
  const getAllArticlesIds = async () => {
    const pager = { limit: 20 as const, offset: 0 }
    let allArticlesIds: string[] = []
    let isIncludedArticles = true

    while (isIncludedArticles) {
      const fetchedIds = (
        await fetchArticlesIds({ limit: pager.limit, offset: pager.offset })
      ).contents.map((content) => content.id)

      allArticlesIds = [...allArticlesIds, ...fetchedIds]

      if (fetchedIds.length < pager.limit) {
        isIncludedArticles = false
      } else {
        pager.offset = pager.offset + pager.limit
      }
    }
    return allArticlesIds
  }

  const getLatestArticles = async (params: PaginationParams) => {
    return await fetchLatestArtcles(params).then((articles) => {
      return mappingArticles(articles)
    })
  }

  return {
    getAllArticlesIds,
    getLatestArticles,
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
