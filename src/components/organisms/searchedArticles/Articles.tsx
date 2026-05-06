import { Pagination } from 'src/components/atoms/pagination'
import { ArticleContent } from 'src/components/molecures/articleContent'
import { useSearchParams } from 'src/hooks/router/useSearchParams'
import type { ArticlesPagination } from 'src/types'

interface Props {
  articles: ArticlesPagination
  currentIndex: number
}

export function Articles({ currentIndex, articles }: Props) {
  const { searchArticlesWithPager } = useSearchParams()
  const { contents, totalCount, limit } = articles

  const handleClick = (index: number) => {
    searchArticlesWithPager(index)
  }

  return (
    <div className={'m-0'}>
      {contents.length ? (
        <>
          {contents.map((article) => {
            return (
              <div key={article.id} className={'pb-8 last:pb-0'}>
                <ArticleContent article={article} />
              </div>
            )
          })}
          <div className={'pb-8'}>
            <Pagination
              currentIndex={currentIndex}
              totalCount={totalCount}
              limit={limit}
              onClick={handleClick}
            />
          </div>
        </>
      ) : (
        <div className={'flex justify-center items-center mx-auto text-2xl'}>
          No Result!
        </div>
      )}
    </div>
  )
}
