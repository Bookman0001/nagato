import { get } from 'src/services/axios'
import { ArticleResponse } from 'src/types'

export async function fetchArticle(
  articleId: string
): Promise<ArticleResponse> {
  const json = await get<ArticleResponse>(`/technology-articles/${articleId}`)
  return json
}
