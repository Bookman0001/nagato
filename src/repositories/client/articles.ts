import { ArticlesApiResponse, SearchParams } from 'src/types'

export async function fetchSearchedArticles(params: SearchParams) {
  const encodedParams: SearchParams = {
    searchWord: encodeURI(params.searchWord),
  }
  const response = await window.fetch(
    `${window.location.origin}/api/articles`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(encodedParams),
    }
  )
  const data: ArticlesApiResponse = await response.json()
  return data
}
