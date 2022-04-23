import type {
  ArticleResponse,
  DraftArticleResponse,
  DraftParams,
} from 'src/types'

import { get } from 'src/services/axios'

export async function fetchArticle(
  articleId: string
): Promise<ArticleResponse> {
  return await get<ArticleResponse>(`/technology-articles/${articleId}`)
}

export async function fetchDraftArticle(
  draftParams: DraftParams
): Promise<DraftArticleResponse> {
  const { id, draftKey } = draftParams
  return await get<DraftArticleResponse>(
    `/technology-articles/${id}?draftKey=${draftKey}`
  )
}
