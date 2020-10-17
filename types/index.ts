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

export type Article = {
  id: string
  publishedAt: string
  title: string
  description: string
  content: string
  slug: string
}
