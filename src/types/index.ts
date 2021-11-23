/* API Response Type Definition */
export type ArticlesResponse = {
  readonly contents: Array<ArticleResponse>
  readonly totalCount: number
  readonly offset: number
  readonly limit: number
}

export type ArticleResponse = {
  readonly id: string
  readonly createdAt: string
  readonly updatedAt: string
  readonly publishedAt: string
  readonly title: string
  readonly description: string
  readonly content: string
}

/* App Type Definition */
export type ArticlesPagination = {
  readonly contents: Array<Article>
  readonly totalCount: number
  readonly offset: number
  readonly limit: number
}

export type Article = {
  readonly id: string
  readonly publishedAt: string
  readonly title: string
  readonly description: string
  readonly content: string
}

export type Params = {
  limit: number
}

export type SearchParams = {
  keyword: string
  page: string
}
