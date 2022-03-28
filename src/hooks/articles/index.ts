import useSWR from 'swr'

import type { SearchParams } from 'src/types'

import { articlesClientController } from 'src/controllers/articles'

export function useSearchedArticles(params: SearchParams) {
  const { getSearchedArticles } = articlesClientController(params)
  const { data, error } = useSWR(
    `/api/articles?${params.keyword}${params.page}`,
    getSearchedArticles
  )
  return { articles: data, error }
}
