import type { OptionalQuery as OptionalQuery0 } from '../pages/posts'

export const pagesPath = {
  "posts": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[id]' as const, query: { id }, hash: url?.hash })
    }),
    $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({ pathname: '/posts' as const, query: url?.query, hash: url?.hash })
  },
  "preview": {
    $url: (url?: { hash?: string }) => ({ pathname: '/preview' as const, hash: url?.hash })
  },
  "reception": {
    $url: (url?: { hash?: string }) => ({ pathname: '/reception' as const, hash: url?.hash })
  },
  "thanks": {
    $url: (url?: { hash?: string }) => ({ pathname: '/thanks' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
