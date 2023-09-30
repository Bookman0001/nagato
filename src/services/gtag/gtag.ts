declare global {
  interface Window {
    gtag: (type: string, action: string, obj: unknown) => void
  }
}

export const GA_ID = process.env.GA_ID ?? ''
export const existsGaId = GA_ID !== ''

export const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}
