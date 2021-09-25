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
  justify-content: center;
  :hover {
    opacity: 0.7;
  }
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    margin: 0;
    width: 100%;
  }
`

const PublishedWrapper = styled.div`
  p {
    text-align: right;
    padding-left: 20px;
  }
`

const SubTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  display: -webkit-box;
  overflow: hidden;
  margin-right: auto;
  text-overflow: ellipsis;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    font-size: 1rem;
  }
`
