import Link from 'next/link'

import type { ContentInArticles } from 'src/types'
import { pagesPath } from 'src/utils/$path'

interface Props {
  article: ContentInArticles
}

export function ArticleContent({ article }: Props) {
  return (
    <div>
      <Link href={pagesPath.posts._id(article.id).$url()} passHref>
        <div
          className={'cursor-pointer leading-normal hover:opacity-70 font-bold'}
        >
          <h3
            key={article.id}
            className={'tablet:text-xl text-lg m-auto underline text-white'}
          >
            {article.title}
          </h3>
          <div className={'tablet:text-lg text-base text-white text-right'}>
            {article.publishedAt}
          </div>
        </div>
      </Link>
    </div>
  )
}
