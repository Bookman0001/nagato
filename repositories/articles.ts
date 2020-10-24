import { get } from 'services'
import { ArticlesApiResponse } from 'types'

export async function fetchArticles(): Promise<ArticlesApiResponse> {
  return await get<ArticlesApiResponse>(`/technology-articles`)
}
