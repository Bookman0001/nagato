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

export type ArticlesResponse = Readonly<{
  contents: Array<ArticleResponse>
  totalCount: number
  offset: number
  limit: number
}>

export type DraftArticleResponse = Omit<ArticleResponse, 'publishedAt'>

type ErrorCode = 'ERR400' | 'ERR405' | 'ERR500'

type Issues = Array<{ fieldName?: string; message: string }>

export type Error = Readonly<{
  errorCode: ErrorCode
  issues: Issues
}>

/* App Type Definition */
export type Article = Readonly<{
  id: string
  publishedAt: string
  title: string
  description: string
  content: string
}>

export type ArticlesPagination = Readonly<{
  contents: Array<Article>
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
