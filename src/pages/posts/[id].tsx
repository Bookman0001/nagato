import sanitizeHtml from 'sanitize-html'

import type { Article } from 'src/types'

import { BlogLayout } from 'src/components/templates/blogLayout'
import { articleController } from 'src/controllers/article'
import { articlesController } from 'src/controllers/articles'

interface Params {
  params: {
    id: string
  }
}

interface Props {
  article: Article
}

export async function getStaticPaths() {
  const { getAllArticleIds } = articlesController()
  const articleIds = await getAllArticleIds()
  const paths = articleIds.map((id) => {
    return { params: { id } }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: Params) {
  const { getArticle } = articleController()
  const article = await getArticle(params.id)
  return {
    props: {
      article: article,
    },
  }
}

export default function Post({ article }: Props) {
  return (
    <BlogLayout title={article.title} article={article}>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
      />
    </BlogLayout>
  )
}
