import { get } from 'src/services/axios'
import { ArticlesApiResponse, Argument, SearchParams } from 'src/types'

export async function fetchAllArticles(): Promise<ArticlesApiResponse> {
  return await get<ArticlesApiResponse>(`/technology-articles`)
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
