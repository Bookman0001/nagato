import dayjs from 'dayjs'

import { ArticleResponse, Article } from 'types'

export function mappingArticles(articles: ArticleResponse[]): Article[] {
  return articles.map((article) => {
    const { id, publishedAt, title, description, content, slug } = article
    return {
      id,
      publishedAt: dayjs(publishedAt).format('YYYY/MM/DD'),
      title,
      description,
      content,
      slug,
    }
  })
}
