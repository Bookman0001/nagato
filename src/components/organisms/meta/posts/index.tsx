import Head from 'next/head'

import { useCanonicalLink } from 'src/hooks/canonicalLink'

export default function DefaultMetaTag() {
  const { canonicalLink } = useCanonicalLink()
  return (
    <Head>
      <title>k工房</title>
      <meta property="og:title" content={'k工房'} key="og:title" />
      <meta
        property="og:description"
        content={'フロントエンド周りの技術情報や思ったことを発進しています。'}
        key="og:description"
      />
      <meta
        name="description"
        content={'フロントエンド周りの技術情報や思ったことを発進しています。'}
        key="description"
      />
      <meta
        property="og:image"
        content={`https://k-puppeteer.com/assets/ogp.jpg`}
      />
      <link rel="canonical" href={canonicalLink}></link>
    </Head>
  )
}
