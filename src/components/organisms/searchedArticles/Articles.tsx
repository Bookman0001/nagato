import styled from 'styled-components'

import { Pagination } from 'src/components/atoms/pagination'
import { ArticleContent } from 'src/components/molecures/articleContent'
import { useSearchParams } from 'src/hooks/router/useSearchParams'
import { fontSize } from 'src/theme/constants'
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
    <DetailWrapper>
      {contents.length ? (
        <>
          {contents.map((article) => {
            return (
              <Wrapper key={article.id}>
                <ArticleContent article={article} />
              </Wrapper>
            )
          })}
          <PaginationWrapper>
            <Pagination
              currentIndex={currentIndex}
              totalCount={totalCount}
              limit={limit}
              onClick={handleClick}
            />
          </PaginationWrapper>
        </>
      ) : (
        <NoResult>No Result!</NoResult>
      )}
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin: 0;
`

const NoResult = styled.div`
  font-size: ${fontSize.S};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const PaginationWrapper = styled.div`
  padding-bottom: 2rem;
`

const Wrapper = styled.div`
  padding-bottom: 2rem;
  :last-child {
    padding-bottom: 0;
  }
`
