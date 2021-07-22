import { Event } from 'src/types'

declare global {
  // eslint-disable-next-line
  interface Window {
    gtag: (type: string, action: string, obj: Object) => void
  }
}

export const GA_ID = process.env.GA_ID || ''

export const existsGaId = GA_ID !== ''

export const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

export const event = ({ action, category, label }: Event) => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
  })
}
