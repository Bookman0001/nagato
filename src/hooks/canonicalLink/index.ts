import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function useCanonicalLink() {
  const router = useRouter()
  const { keyword } = router.query
  const defaultPath =
    typeof window !== 'undefined' ? `${location.origin}/posts` : ''
  const [canonicalLink, setCanonicalLink] = useState<string>(defaultPath)

  useEffect(() => {
    if (keyword) {
      setCanonicalLink(`/posts?keyword=${keyword}`)
    }
    return () => {
      setCanonicalLink(defaultPath)
    }
  }, [keyword, defaultPath])

  return {
    canonicalLink,
  }
}
