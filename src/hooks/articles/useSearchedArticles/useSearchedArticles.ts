import { articlesClientController } from 'src/controllers/articles'
import type { SearchParams } from 'src/utils/zod/searchParams'
import useSWR from 'swr'

export function useSearchedArticles(params: SearchParams) {
  const { getSearchedArticles } = articlesClientController(params)
  const { data, error } = useSWR(
    `/api/articles?${params.keyword}${params.page}`,
    getSearchedArticles
  )
  if (error) {
    throw new Error(error)
  }
  return { articles: data, error }
}
