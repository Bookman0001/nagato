import useSWR from 'swr'

import { SearchParams } from 'src/types'

export function useSearchedArticles(params: SearchParams) {
  const fetchSearchedArticles = async () => {
    await fetch('/api/articles', {
      body: JSON.stringify(params),
    })
  }
  const { data, error } = useSWR('/api/articles', fetchSearchedArticles)

  return { data, error, isLoading: !data }
}
