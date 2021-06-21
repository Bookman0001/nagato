import { useSearchedArticles } from 'src/hooks/search/articles'
import { SearchParams } from 'src/types'

export default function Post() {
  const params: SearchParams = { searchWord: 'next' }
  const { error, isLoading } = useSearchedArticles(params)

  if (isLoading) return <>now loading</>

  if (error) return <>error happened!</>

  return <>searched!</>
}
