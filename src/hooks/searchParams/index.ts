import { useRouter } from 'next/router'
import { SearchParams } from 'src/types'

export function useSearchParams() {
  const router = useRouter()
  const { keyword, page } = router.query
  const searchWord = (keyword as string) || ''
  const defaultPage = (page as string) || '1'
  const params: SearchParams = { searchWord: searchWord, page: defaultPage }

  const searchArticlesWithPager = (paginationIndex: number) => {
    router.push({
      pathname: '/posts',
      query: { keyword: params.searchWord, page: String(paginationIndex) },
    })
  }

  const searchArticlesWithKeyword = (keyword: string) => {
    router.push({ pathname: '/posts', query: { keyword: keyword } })
  }

  return {
    params,
    searchArticlesWithPager,
    searchArticlesWithKeyword,
  }
}
