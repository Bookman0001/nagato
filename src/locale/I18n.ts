import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { defaultLang } from 'src/locale/langs'

const resources = {
  ja: {
    translation: {
      change: 'EN',
      introduction:
        'フロントエンドをメインにエンジニアリングをしています。<0 />一貫性のあるユーザービリティの高いシステムを追求しています。',
      oss: '貢献しているOSS',
    },
  },
  en: {
    translation: {
      change: 'JP',
      introduction:
        'I am front-end developer.Especially, I love TypeScript and React component logic. Also, I experienced back-end enginnering including AWS management.',
      oss: 'contributed to oss as follows.',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLang,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
