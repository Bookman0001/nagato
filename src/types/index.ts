/* API Response Type Definition */
export type ArticleResponse = {
  readonly id: string
  readonly createdAt: string
  readonly updatedAt: string
  readonly publishedAt: string
  readonly title: string
  readonly description: string
  readonly content: string
}

export type ArticlesResponse = {
  readonly contents: Array<ArticleResponse>
  readonly totalCount: number
  readonly offset: number
  readonly limit: number
}

/* App Type Definition */
export type Article = {
  readonly id: string
  readonly publishedAt: string
  readonly title: string
  readonly description: string
  readonly content: string
}

export type ArticlesPagination = {
  readonly contents: Array<Article>
  readonly totalCount: number
  readonly offset: number
  readonly limit: number
}

export type PaginationParams = {
  readonly limit: number
}

export type SearchParams = {
  readonly keyword: string
  readonly page: string
}

export type FormParams = {
  readonly email: string
  readonly name: string
  readonly content: string
}
