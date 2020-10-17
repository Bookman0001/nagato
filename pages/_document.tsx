import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface Props {
  styleTags: any
}

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App) => (props) =>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
