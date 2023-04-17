import Link from 'next/link'
import styled from 'styled-components'

import { color, deviceWidth, fontSize } from 'src/theme/constants'
import type { ContentInArticles } from 'src/types'
import { pagesPath } from 'src/utils/$path'

interface Props {
  article: ContentInArticles
}

export function ArticleContent({ article }: Props) {
  return (
    <Container>
      <Link href={pagesPath.posts._id(article.id).$url()} passHref>
        <StyledLink>
          <SubTitle key={article.id}>{article.title}</SubTitle>
          <DateMemo>{article.publishedAt}</DateMemo>
        </StyledLink>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  a {
    color: ${color.WHITE};
  }
`

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
