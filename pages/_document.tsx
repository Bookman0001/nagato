import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { existsGaId, GA_ID } from 'lib/gtag'

interface Props {
  styleTags: React.ReactElement
}

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content={'k工房'} />
          <meta
            property="og:description"
            content={
              'フロントエンド周りの技術情報や思ったことを発進しています。'
            }
          />
          <meta name="keywords" content={'engineer'} />
          <meta property="og:type" content="blog" />
          <meta property="og:image" content={'/assets/overview.png'} />
          <meta property="og:site_name" content={'k-puppeteer'} />
          {this.props.styleTags}
          {existsGaId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
