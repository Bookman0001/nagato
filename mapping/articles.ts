import dayjs from 'dayjs'

import { ArticlesApiResponse, ArticleContents } from 'types'

export function mappingArticles(
  response: ArticlesApiResponse
): ArticleContents {
  const { contents, totalCount, offset, limit } = response
  const mappedContents = contents.map((article) => {
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
  return {
    contents: mappedContents,
    totalCount,
    offset,
    limit,
  }
}
