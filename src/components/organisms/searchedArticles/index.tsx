import styled from 'styled-components'

import { ArticleContents } from 'src/types'
import ArticleContent from 'src/components/molecures/articleContent'

interface Props {
  articles: ArticleContents | undefined
}

export default function Articles({ articles }: Props) {
  if (!articles) return null

  const { contents } = articles

  if (!contents.length) {
    return <LoadingContainer>No Result...</LoadingContainer>
  }

  return (
    <DetailWrapper>
      {articles?.contents.map((article) => {
        return (
          <div key={article.id}>
            <ArticleContent article={article} />
          </div>
        )
      })}
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin: 0;
`

const LoadingContainer = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
