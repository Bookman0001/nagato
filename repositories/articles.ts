import { get } from 'services'
import { ArticleResponse } from 'types'

type ApiResponse = {
  contents: Array<ArticleResponse>
  totalCount: number
  offset: number
  limit: number
}

export async function fetchArticles(): Promise<ArticleResponse[]> {
  const json = await get<ApiResponse>('/technology-articles')
  return json.contents
}
