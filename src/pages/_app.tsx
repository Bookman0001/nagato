import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'

import * as gtag from 'src/services/gtag'
import SwrConfig from 'src/services/swr'
import { GlobalStyle } from 'src/theme'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }
    const handleRouteChange = (path: string) => {
      gtag.pageview(path)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <GlobalStyle />
      <SwrConfig>
        <Component {...pageProps} />
      </SwrConfig>
    </>
  )
}

export default App
