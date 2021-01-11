import dayjs from 'dayjs'

import { fetchArticle } from 'repositories/article'
import { ArticleResponse, Article } from 'types'

function mappingArticle(article: ArticleResponse): Article {
  const { id, publishedAt, title, description, content } = article
  return {
    id,
    publishedAt: dayjs(publishedAt).format('YYYY/MM/DD'),
    title,
    description,
    content,
  }
}

export function useArticle() {
  const getArticle = async (articleId: string) => {
    return await fetchArticle(articleId).then((article: ArticleResponse) => {
      return mappingArticle(article)
    })
  }

  return {
    getArticle,
  }
}
