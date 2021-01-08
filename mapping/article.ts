import dayjs from 'dayjs'

import { ArticleResponse, Article } from 'types'

export function mappingArticle(article: ArticleResponse): Article {
  const { id, publishedAt, title, description, content } = article
  return {
    id,
    publishedAt: dayjs(publishedAt).format('YYYY/MM/DD'),
    title,
    description,
    content,
  }
}
