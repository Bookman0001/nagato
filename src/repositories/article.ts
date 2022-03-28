import type { ArticleResponse } from 'src/types'

import { get } from 'src/services/axios'

export async function fetchArticle(
  articleId: string
): Promise<ArticleResponse> {
  const json = await get<ArticleResponse>(`/technology-articles/${articleId}`)
  return json
}
