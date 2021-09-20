import styled from 'styled-components'

import ArticleContent from 'src/components/molecures/articleContent'
import Pagination from 'src/components/atoms/pagination'
import { ArticleContents } from 'src/types'

interface Props {
  articles: ArticleContents
  currentIndex: number
  onClick: (index: number) => void
}

export default function SearchedArticled({
  currentIndex,
  articles,
  onClick,
}: Props) {
  const { contents, totalCount, limit } = articles

  return (
    <DetailWrapper>
      {contents.length ? (
        <>
          {contents.map((article) => {
            return (
              <div key={article.id}>
                <ArticleContent article={article} />
              </div>
            )
          })}
          <PaginationWrapper>
            <Pagination
              currentIndex={currentIndex}
              totalCount={totalCount}
              limit={limit}
              onClick={onClick}
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
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const PaginationWrapper = styled.div`
  padding-bottom: 30px;
`
