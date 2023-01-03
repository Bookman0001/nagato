import { useRouter } from 'next/router'

import { pagesPath } from 'src/utils/$path'
import type { SearchParams } from 'src/utils/zod/searchParams'

export function useSearchParams() {
  const router = useRouter()
  const { keyword, page } = router.query
  const defaultKeyword = (keyword as string) || ''
  const defaultPage = (page as string) || '1'
  const params: SearchParams = { keyword: defaultKeyword, page: defaultPage }

  const searchArticlesWithPager = (paginationIndex: number) => {
    router.push(
      pagesPath.posts.$url({
        query: { keyword: params.keyword, page: String(paginationIndex) },
      })
    )
  }

  const searchArticlesWithKeyword = (keyword: string) => {
    router.push(
      pagesPath.posts.$url({
        query: { keyword },
      })
    )
  }

  return {
    params,
    searchArticlesWithPager,
    searchArticlesWithKeyword,
  }
}
