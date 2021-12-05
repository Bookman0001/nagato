import { get } from 'src/services/axios'
import { ArticlesResponse, PaginationParams, SearchParams } from 'src/types'

export async function fetchAllArticles({
  limit,
  offset,
}: {
  limit: number
  offset: number
}): Promise<ArticlesResponse> {
  return await get<ArticlesResponse>(
    `/technology-articles?offset=${offset}&limit=${limit}`
  )
}

export async function fetchLimitedArtcles(
  params: PaginationParams
): Promise<ArticlesResponse> {
  return await get<ArticlesResponse>(
    `/technology-articles?limit=${params.limit}`
  )
}

export async function fetchSearchedArticles(
  params: SearchParams
): Promise<ArticlesResponse> {
  const limit = 10
  const page = Number(params.page) || 1
  const offset = page > 1 ? page * limit - limit : 0
  return await get<ArticlesResponse>(
    `/technology-articles?q=${params.keyword}&limit=${limit}&offset=${offset}`
  )
}
