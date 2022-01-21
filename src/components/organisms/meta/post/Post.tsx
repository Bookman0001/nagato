import Head from 'next/head'

import { Article } from 'src/types'

interface Props {
  article: Article
}

export function Post({ article }: Props) {
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
      <meta
        property="og:image"
        content={`https://k-puppeteer.com/assets/ogp.jpg`}
      />
    </Head>
  )
}
