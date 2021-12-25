import { useRouter } from 'next/router'

export function useTransitionPage() {
  const router = useRouter()

  const transitionToTop = () => {
    router.push({ pathname: '/' })
  }

  const transitionToSearch = () => {
    router.push({ pathname: '/posts' })
  }

  const transitionToThanks = () => {
    router.push({ pathname: '/thanks' })
  }

  return {
    transitionToTop,
    transitionToSearch,
    transitionToThanks,
  }
}
