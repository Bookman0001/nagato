import { useRouter } from 'next/router'

export function useBackToPage() {
  const router = useRouter()

  const backToTop = () => {
    router.push({ pathname: '/' })
  }

  return {
    backToTop,
  }
}
