import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

import Description from 'src/components/atoms/paragraphContent'
import { Article } from 'src/types'

interface Props {
  article: Article
}

export default function ArticleContent({ article }: Props) {
  return (
    <Link href={`/posts/${article.id}`}>
      <StyledLink>
        <SubTitle key={article.id}>{article.title}</SubTitle>
        <PublishedWrapper>
          <Description>{article.publishedAt}</Description>
        </PublishedWrapper>
      </StyledLink>
    </Link>
  )
}

const StyledLink = styled.span`
  cursor: pointer;
  display: flex;
  padding: 20px;
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
