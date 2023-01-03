import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps } from 'next'
import sanitizeHtml from 'sanitize-html'

import { BlogLayout } from 'src/components/templates/blogLayout'
import { articleController } from 'src/controllers/article'
import { articlesController } from 'src/controllers/articles'
import type { Article } from 'src/types'

interface Params extends ParsedUrlQuery {
  id: string
}

interface Props {
  article: Article
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { getAllArticleIds } = articlesController()
  const articleIds = await getAllArticleIds()
  const paths = articleIds.map((id) => {
    return { params: { id } }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params) throw new Error('undefined params')
  const { getArticle } = articleController()
  const article = await getArticle(params.id)
  return {
    props: {
      article,
    },
  }
}

export default function Post({ article }: Props) {
  return (
    <BlogLayout article={article}>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
      />
    </BlogLayout>
  )
}
