export type ArticlesApiResponse = {
  contents: Array<ArticleResponse>
  totalCount: number
  offset: number
  limit: number
}

export type ArticleResponse = {
  id: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  title: string
  description: string
  content: string
  slug: string
}

export type ArticleContents = {
  contents: Array<Article>
  totalCount: number
  offset: number
  limit: number
}

export type Article = {
  id: string
  publishedAt: string
  title: string
  description: string
  content: string
  slug: string
}
