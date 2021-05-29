import { BreadcrumbContents } from 'src/types'

export function useBreadcrumb() {
  const crumbContentsInArticle: BreadcrumbContents = [
    { label: 'TOP', link: '/' },
  ]

  return {
    crumbContentsInArticle,
  }
}
