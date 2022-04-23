import dayjs from 'dayjs'

import type {
  ArticleResponse,
  Article,
  DraftParams,
  DraftArticleResponse,
} from 'src/types'

import { fetchArticle, fetchDraftArticle } from 'src/repositories/article'

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

function mappingDraftArticle(article: DraftArticleResponse): Article {
  const { id, title, description, content } = article
  return {
    id,
    publishedAt: '',
    title,
    description,
    content,
  }
}

export function draftArticleController() {
  const getDraftArticle = async (draftParams: DraftParams) => {
    return await fetchDraftArticle(draftParams).then(
      (draftArticle: DraftArticleResponse) => {
        return mappingDraftArticle(draftArticle)
      }
    )
  }

  return {
    getDraftArticle,
  }
}
