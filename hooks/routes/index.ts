import { BreadCrumbContents } from 'types'

export function useBreadCrumb() {
  const crumbContentsInArticle: BreadCrumbContents = [
    { label: 'TOP', link: '/' },
  ]

  return {
    crumbContentsInArticle,
  }
}
