import Link from 'next/link'
import styled from 'styled-components'

import { deviceWidth, fontSize } from 'src/theme/constants'
import type { ContentInArticles } from 'src/types'
import { pagesPath } from 'src/utils/$path'

interface Props {
  article: ContentInArticles
}

export function ArticleContent({ article }: Props) {
  return (
    <div>
      <Link href={pagesPath.posts._id(article.id).$url()} passHref>
        <div className={'cursor-pointer leading-normal hover:opacity-70'}>
          <SubTitle key={article.id}>{article.title}</SubTitle>
          <DateMemo>{article.publishedAt}</DateMemo>
        </div>
      </Link>
    </div>
  )
}

const SubTitle = styled.h3`
  font-size: ${fontSize.S};
  margin-right: auto;
  text-decoration: underline;
  @media (max-width: ${deviceWidth.PHONE}) {
    font-size: ${fontSize.XS};
  }
`

const DateMemo = styled.div`
  font-size: ${fontSize.XS};
  text-align: right;
  line-height: 1.7;
  @media (max-width: ${deviceWidth.PHONE}) {
    font-size: ${fontSize.XXS};
  }
`
