import useSWR from 'swr'

import { SearchParams } from 'src/types'

export function useSearchedArticles(params: SearchParams) {
  const fetchSearchedArticles = async () => {
    return await fetch(`${window.location.origin}/api/articles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    })
  }

  const { data, error } = useSWR('/api/articles', fetchSearchedArticles)
  return { data, error, isLoading: !data }
}
