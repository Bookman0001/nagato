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
        <Description>{article.publishedAt}</Description>
      </StyledLink>
    </Link>
  )
}

const StyledLink = styled.div`
  cursor: pointer;
  text-align: center;
  line-height: 1.5;
  :hover {
    opacity: 0.7;
  }
`

const SubTitle = styled.h3`
  font-size: 1.25rem;
  margin-right: auto;
  text-decoration: underline;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    font-size: 1rem;
  }
`
