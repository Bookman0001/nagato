import useSWR from 'swr'

import { articlesClientController } from 'src/controllers/articles'
import { SearchParams } from 'src/types'

export function useSearchedArticles(params: SearchParams) {
  const { getSearchedArticles } = articlesClientController(params)
  const { data, error } = useSWR(
    `/api/articles?${params.keyword}${params.page}`,
    getSearchedArticles
  )
  return { articles: data, error }
}
