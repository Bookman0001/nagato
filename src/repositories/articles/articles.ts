import { get } from 'src/services/axios'
import type { ArticlesResponse, PaginationParams } from 'src/types'
import type { SearchParams } from 'src/utils/zod/searchParams'

export async function fetchAllArticles({
  limit,
  offset,
}: {
  limit: number
  offset: number
}): Promise<ArticlesResponse> {
  return await get<ArticlesResponse>(
    `/technology-articles?offset=${offset}&limit=${limit}&fields=id,createdAt,updatedAt,publishedAt,title,description`
  )
}

export async function fetchLimitedArtcles(
  params: PaginationParams
): Promise<ArticlesResponse> {
  return await get<ArticlesResponse>(
    `/technology-articles?limit=${params.limit}&fields=id,createdAt,updatedAt,publishedAt,title,description`
  )
}

export async function fetchSearchedArticles(
  params: SearchParams
): Promise<ArticlesResponse> {
  const limit = 10
  const page = Number(params.page) || 1
  const offset = page > 1 ? page * limit - limit : 0
  return await get<ArticlesResponse>(
    `/technology-articles?q=${params.keyword}&limit=${limit}&offset=${offset}&fields=id,createdAt,updatedAt,publishedAt,title,description`
  )
}
