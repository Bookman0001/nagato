import { BreadcrumbContents } from 'src/types'

export function useBreadCrumb() {
  const crumbContentsInArticle: BreadcrumbContents = [
    { label: 'TOP', link: '/' },
  ]

  return {
    crumbContentsInArticle,
  }
}
