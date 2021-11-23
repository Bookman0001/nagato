import { ArticlesResponse, SearchParams } from 'src/types'

export async function fetchSearchedArticles(params: SearchParams) {
  const encodedParams: SearchParams = {
    keyword: encodeURI(params.keyword),
    page: encodeURI(params.page),
  }
  const response = await window.fetch(
    `${window.location.origin}/api/articles`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(encodedParams),
    }
  )
  const data: ArticlesResponse = await response.json()
  return data
}
