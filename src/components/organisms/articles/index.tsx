import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

import { ArticleContents } from 'src/types'
import Title from 'src/components/atoms/title'
import Description from 'src/components/atoms/paragraphContent'

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
              <Link href={`/posts/${article.id}`}>
                <StyledLink>
                  <SubTitle key={article.id}>{article.title}</SubTitle>
                  <PublishedWrapper>
                    <Description>{article.publishedAt}</Description>
                  </PublishedWrapper>
                </StyledLink>
              </Link>
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

const StyledLink = styled.span`
  cursor: pointer;
  display: flex;
  margin: 20px;
  :hover {
    opacity: 0.7;
  }
  ${media.lessThan('small')`
    margin: 0;
    width: 100%;
    margin-bottom: 20px;
  `}
`

const PublishedWrapper = styled.div`
  p {
    text-align: right;
    padding-left: 20px;
  }
`

const SubTitle = styled.h3`
  font-size: 20px;
  display: -webkit-box;
  overflow: hidden;
  margin-right: auto;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  ${media.lessThan('small')`
    font-size: 20px;
  `}
`
