import dayjs from 'dayjs'

import type { ArticleResponse, Article } from 'src/types'

import { fetchArticle } from 'src/repositories/article'

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

export function articleController() {
  const getArticle = async (articleId: string) => {
    return await fetchArticle(articleId).then((article: ArticleResponse) => {
      return mappingArticle(article)
    })
  }

  return {
    getArticle,
  }
}
