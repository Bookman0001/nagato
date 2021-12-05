import { useRouter } from 'next/router'

export function useTransitionPage() {
  const router = useRouter()

  const transitionToTop = () => {
    router.push({ pathname: '/' })
  }

  const transitionToThanks = () => {
    router.push({ pathname: '/thanks' })
  }

  return {
    transitionToTop,
    transitionToThanks,
  }
}
