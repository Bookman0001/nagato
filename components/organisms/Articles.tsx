import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { ArticleContents } from 'types'

const Title = dynamic(() => import('components/atoms/Title'))
const Description = dynamic(() => import('components/atoms/ParagraphContent'))

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
  margin-bottom: 150px;
  ${media.lessThan('small')`
  margin-bottom: 100px;
  `}
`

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  ${media.lessThan('small')`
    display: block;
  `}
`

const StyledLink = styled.span`
  cursor: pointer;
  display: block;
  margin: 10px;
  padding: 20px;
  border: 2px solid #303030;
  :hover {
    opacity: 0.8;
    border: 2px solid #0099ff;
  }
  ${media.lessThan('small')`
    width: calc(100% - 60px);
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
`
