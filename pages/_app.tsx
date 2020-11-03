import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from 'lib/gtag'

//ブラウザ内部でルーターが切り替わった時に発火させている
const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }
    const handleRouteChange = (path) => {
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
