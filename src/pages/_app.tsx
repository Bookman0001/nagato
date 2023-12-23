import { SpeedInsights } from '@vercel/speed-insights/next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import ErrorBoundary from 'src/components/error/ErrorBoundary'
import * as gtag from 'src/services/gtag'
import SwrConfig from 'src/services/swr/SwrConfig'
import 'src/theme/global.css'

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
    <ErrorBoundary>
      <SpeedInsights />
      <SwrConfig>
        <Component {...pageProps} />
      </SwrConfig>
    </ErrorBoundary>
  )
}

export default App
