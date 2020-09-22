import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ja: {
    translation: {
      change: 'in English',
      introduction:
        'フロントエンドをメインにエンジニアリングをしています。直近で最も得意としているのはTypeScriptとReactによるコンポーネント計です。他に保守レベルでのバックエンドでのエンジニアリング、AWS運用も経験があります。一貫性のあるユーザービリティの高いシステムを追求し続けています。',
      oss:
        '微力ながら下記のオープンソースソフトウェアの改善のためコミット活動をしていました。',
      step1:
        '大学病院で使用するパッケージウェアのうち画面と帳票部分の開発や改修を主に行っていました。また、SEという形でお客様との打ち合わせ、仕様策定など各種業務経験も培いました。',
      step2:
        'web企業のエンジニアとして転向、新規プロジェクトの開発や保守運用まで幅広く経験しました。フロントとバック両方の知識が要求される現場だったのでエンジニアとして幅広く経験できました。',
      now: '現在は専門領域をフロントエンドとして日々開発に勤しんでいます。',
    },
  },
  en: {
    translation: {
      change: '日本語で',
      introduction:
        'I am front-end developer.Especially, I love TypeScript and React component logic. Also, I experienced back-end enginnering including AWS management.',
      step1: 'I developed and modified package software app(medical system). ',
      oss: 'contributed to oss as follows.',
      step2:
        'I developed web app using various tech tips in front-end and back-end',
      now: 'Now, majoring in front-end expert developer.',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ja',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
