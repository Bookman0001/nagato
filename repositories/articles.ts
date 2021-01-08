import { get } from 'services'
import { ArticlesApiResponse, Argument } from 'types'

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
