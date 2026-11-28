/* API Response Type Definition */
export type ArticleResponse = Readonly<{
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  description: string
  content: string
}>

type ContentResponseInArticles = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  description: string
}

export type ArticlesIdResponses = Readonly<{
  contents: Array<Pick<ArticleResponse, 'id'>>
}>

export type ArticlesResponse = Readonly<{
  contents: Array<ContentResponseInArticles>
  totalCount: number
  offset: number
  limit: number
}>

export type DraftArticleResponse = Omit<ArticleResponse, 'publishedAt'>

/* App Type Definition */
export type Article = Readonly<{
  id: string
  publishedAt: string
  title: string
  description: string
  content: string
}>

export type ContentInArticles = {
  id: string
  publishedAt: string
  title: string
  description: string
}

export type ArticlesPagination = Readonly<{
  contents: Array<ContentInArticles>
  totalCount: number
  offset: number
  limit: number
}>

export type PaginationParams = Readonly<{
  limit: number
}>

export type DraftParams = Readonly<{
  id: string
  draftKey: string
}>
