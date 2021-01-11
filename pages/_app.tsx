import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import * as gtag from 'services/gtag'

//ブラウザ内部でルーターが切り替わった時に発火させている
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

  return <Component {...pageProps} />
}

export default App
