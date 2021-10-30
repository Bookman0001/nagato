import styled from 'styled-components'
import Link from 'next/link'

import Description from 'src/components/atoms/paragraphContent'
import { Article } from 'src/types'
import { DEVICE_WIDTH } from 'src/theme/constants'

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

const StyledLink = styled.div`
  cursor: pointer;
  display: flex;
  line-height: 1.5;
  :hover {
    opacity: 0.7;
  }
`

const PublishedWrapper = styled.div`
  p {
    margin-left: auto;
    padding-left: 10px;
    width: 100%;
  }
`

const SubTitle = styled.h3`
  font-size: 1.25rem;
  margin-right: auto;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    font-size: 1rem;
  }
`
