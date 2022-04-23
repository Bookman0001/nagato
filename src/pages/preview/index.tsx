import sanitizeHtml from 'sanitize-html'

import { BlogLayout } from 'src/components/templates/blogLayout'
import { ErrorLayout } from 'src/components/templates/blogLayout/ErrorLayout'
import { draftArticleController } from 'src/controllers/article'
import { Article } from 'src/types'

interface Context {
  query: {
    content_id: string
    draft_key: string
  }
}

interface Props {
  article: Article
  errorMessage: string
}

export async function getServerSideProps(context: Context) {
  const { getDraftArticle } = draftArticleController()
  /* eslint-disable camelcase */
  const { content_id, draft_key } = context.query

  try {
    const article = await getDraftArticle({
      id: content_id,
      draftKey: draft_key,
    })
    return {
      props: {
        article: article,
      },
    }
  } catch (e) {
    if (e instanceof Error) {
      return { props: { errorMessage: e.message } }
    }
    throw e
  }
  /* eslint-enable camelcase */
}

export default function Preview({ article, errorMessage }: Props) {
  if (errorMessage) {
    return <ErrorLayout>{errorMessage}</ErrorLayout>
  }

  return (
    <BlogLayout title={article.title} article={article}>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
      />
    </BlogLayout>
  )
}
