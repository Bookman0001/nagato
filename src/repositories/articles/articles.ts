import { get } from 'src/services/serverFetch'
import type {
  ArticlesIdResponses,
  ArticlesResponse,
  PaginationParams,
} from 'src/types'
import type { SearchParams } from 'src/utils/zod/searchParams'

export async function fetchArticlesIds({
  limit,
  offset,
}: {
  limit: number
  offset: number
}): Promise<ArticlesIdResponses> {
  return await get<ArticlesIdResponses>(
    `/technology-articles?offset=${offset}&limit=${limit}&fields=id`
  )
}

export async function fetchLatestArtcles(
  params: PaginationParams
): Promise<ArticlesResponse> {
  return await get<ArticlesResponse>(
    `/technology-articles?limit=${params.limit}&fields=id,createdAt,updatedAt,publishedAt,title,description&orders=-publishedAt`
  )
}

export async function fetchSearchedArticles(
  params: SearchParams
): Promise<ArticlesResponse> {
  const limit = 10
  const page = Number(params.page) || 1
  const offset = page > 1 ? page * limit - limit : 0
  return await get<ArticlesResponse>(
    `/technology-articles?q=${params.keyword}&limit=${limit}&offset=${offset}&fields=id,createdAt,updatedAt,publishedAt,title,description&orders=-publishedAt`
  )
}
