import styled from 'styled-components'
import Link from 'next/link'

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
        <DateMemo>{article.publishedAt}</DateMemo>
      </StyledLink>
    </Link>
  )
}

const StyledLink = styled.div`
  cursor: pointer;
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

const DateMemo = styled.div`
  text-align: right;
  line-height: 1.7;
`
