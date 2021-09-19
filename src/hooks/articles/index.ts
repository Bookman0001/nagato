import useSWR from 'swr'

import { articlesClientController } from 'src/controller/articles'
import { SearchParams } from 'src/types'

export function useSearchedArticles(params: SearchParams) {
  const { getSearchedArticles } = articlesClientController(params)
  const { data, error } = useSWR(
    `/api/articles?${params.searchWord}${params.page}`,
    getSearchedArticles
  )
  return { articles: data, error, isLoading: !data }
}
