import styled from 'styled-components'
import ArticleContent from 'src/components/molecures/articleContent'
import { ArticleContents } from 'src/types'

interface Props {
  articles: ArticleContents
}

export default function SearchedArticled({ articles }: Props) {
  const { contents } = articles

  return (
    <DetailWrapper>
      {contents.length > 0 ? (
        contents.map((article) => {
          return (
            <div key={article.id}>
              <ArticleContent article={article} />
            </div>
          )
        })
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
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
