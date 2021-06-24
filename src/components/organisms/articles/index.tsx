import styled from 'styled-components'

import { ArticleContents } from 'src/types'
import ArticleContent from 'src/components/molecures/articleContent'
import Title from 'src/components/atoms/title'

interface Props {
  articles: ArticleContents
}

export default function Articles({ articles }: Props) {
  const { contents } = articles

  if (!contents.length) return null

  return (
    <Section>
      <Title>Articles</Title>
      <DetailWrapper>
        {contents.map((article) => {
          return (
            <div key={article.id}>
              <ArticleContent article={article} />
            </div>
          )
        })}
      </DetailWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 100px;
`

const DetailWrapper = styled.div`
  margin: 0;
`
