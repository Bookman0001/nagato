import Head from 'next/head'

import { Article } from 'src/types'

interface Props {
  article: Article
}

export default function MetaTag({ article }: Props) {
  return (
    <Head>
      <title>{article.title}</title>
      <meta
        name="description"
        content={article.description}
        key="description"
      />
      <meta property="og:title" content={article.title} key="og:title" />
      <meta
        property="og:description"
        content={article.description}
        key="og:description"
      />
    </Head>
  )
}
