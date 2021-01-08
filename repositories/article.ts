import { get } from 'services'
import { ArticleResponse } from 'types'

type ApiResponse = {
  id: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  title: string
  description: string
  content: string
}

export async function fetchArticle(
  articleId: string
): Promise<ArticleResponse> {
  const json = await get<ApiResponse>(`/technology-articles/${articleId}`)
  return json
}
