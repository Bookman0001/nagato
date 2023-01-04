import { useRouter } from 'next/router'

import { pagesPath } from 'src/utils/$path'

export function useTransitionPage() {
  const router = useRouter()

  const transitionToTop = () => {
    router.push(pagesPath.$url())
  }

  const transitionToSearch = () => {
    router.push(pagesPath.posts.$url())
  }

  const transitionToThanks = () => {
    router.push(pagesPath.thanks.$url())
  }

  return {
    transitionToTop,
    transitionToSearch,
    transitionToThanks,
  }
}
