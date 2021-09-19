import { get } from 'src/services/axios'
import { ArticlesApiResponse, Argument, SearchParams } from 'src/types'

export async function fetchAllArticles({
  limit,
  offset,
}: {
  limit: number
  offset: number
}): Promise<ArticlesApiResponse> {
  return await get<ArticlesApiResponse>(
    `/technology-articles?offset=${offset}&limit=${limit}`
  )
}

export async function fetchLimitedArtcles(
  argument: Argument
): Promise<ArticlesApiResponse> {
  return await get<ArticlesApiResponse>(
    `/technology-articles?limit=${argument.limit}`
  )
}

export async function fetchSearchedArticles(
  params: SearchParams
): Promise<ArticlesApiResponse> {
  return await get<ArticlesApiResponse>(
    `/technology-articles?q=${params.searchWord}`
  )
}
