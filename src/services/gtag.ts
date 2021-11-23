declare global {
  // eslint-disable-next-line
  interface Window {
    gtag: (type: string, action: string, obj: Object) => void
  }
}

interface ContactEvent {
  action: 'submit_form'
  category: 'Contact'
  label: string
}

interface ClickEvent {
  action: 'click'
  category: 'Other'
  label: string
}

export const GA_ID = process.env.GA_ID || ''
export const existsGaId = GA_ID !== ''

export const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

export const event = ({
  action,
  category,
  label,
}: ContactEvent | ClickEvent) => {
  if (!existsGaId) {
    return
  }
  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
  })
}
