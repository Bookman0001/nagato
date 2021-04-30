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
      <Title>
        <span>A</span>rticles
      </Title>
      <DetailWrapper>
        {contents.map((article) => {
          return (
            <div key={article.id}>
              <Link href={`/posts/${article.id}`}>
                <StyledLink>
                  <SubTitle key={article.id}>{article.title}</SubTitle>
                  <DescriptionWrapper>
                    <Description>{article.description}</Description>
                  </DescriptionWrapper>
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
  margin-bottom: 50px;
  ${media.lessThan('small')`
  margin-bottom: 30px;
  `}
`

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  margin: -20px;
  ${media.lessThan('small')`
    margin: 0;
    display: block;
  `}
`

const StyledLink = styled.span`
  cursor: pointer;
  display: block;
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

const DescriptionWrapper = styled.div`
  p {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.5;
  }
`

const PublishedWrapper = styled.div`
  p {
    text-align: right;
    padding-right: 20px;
  }
`

const SubTitle = styled.h3`
  font-size: 20px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`
