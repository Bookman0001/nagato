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
}

export type Argument = {
  limit: number
}

type ContactEvent = {
  action: 'submit_form'
  category: 'Contact'
  label: string
}

type ClickEvent = {
  action: 'click'
  category: 'Other'
  label: string
}

export type Event = ContactEvent | ClickEvent

export type BreadcrumbContents = Array<BreadcrumbContent>

type BreadcrumbContent = {
  label: string
  link: string
}
