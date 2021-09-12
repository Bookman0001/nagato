import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { useTranslation } from 'react-i18next'

import * as gtag from 'src/services/gtag'
import { GlobalStyle } from 'src/theme'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const { t } = useTranslation()
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
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <GlobalStyle />
      <title>{t('title')}</title>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
