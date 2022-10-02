import Link from 'next/link'
import styled from 'styled-components'

import { deviceWidth, fontSize } from 'src/theme/constants'
import type { Article } from 'src/types'
import { pagesPath } from 'src/utils/$path'

interface Props {
  article: Article
}

export function ArticleContent({ article }: Props) {
  return (
    <Link href={pagesPath.posts._id(article.id).$url()} passHref>
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
  font-size: ${fontSize.S};
  margin-right: auto;
  text-decoration: underline;
  @media (max-width: ${deviceWidth.PHONE}) {
    font-size: ${fontSize.XS};
  }
`

const DateMemo = styled.div`
  text-align: right;
  line-height: 1.7;
`
