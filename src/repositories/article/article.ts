import { get } from 'src/services/axios'
import type {
  ArticleResponse,
  DraftArticleResponse,
  DraftParams,
} from 'src/types'

export async function fetchArticle(
  articleId: string
): Promise<ArticleResponse> {
  // Allow only alphanumeric, hyphens, and underscores for articleId
  if (!/^[a-zA-Z0-9_-]+$/.test(articleId)) {
    throw new Error('Invalid articleId');
  }
  return await get<ArticleResponse>(`/technology-articles/${articleId}`)
}

export async function fetchDraftArticle(
  draftParams: DraftParams
): Promise<DraftArticleResponse> {
  const { id, draftKey } = draftParams
  // Allow only alphanumeric, hyphens, and underscores for id
  if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
    throw new Error('Invalid article id');
  }
  // Allow only alphanumeric for draftKey (adjust pattern if needed)
  if (!/^[a-zA-Z0-9_-]+$/.test(draftKey)) {
    throw new Error('Invalid draftKey');
  }
  return await get<DraftArticleResponse>(
    `/technology-articles/${id}?draftKey=${draftKey}`
  )
}
