import { useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'

import { ArticleContents } from 'types'
import { useArticles } from 'controllers/articles'
import { GlobalStyle } from 'theme'
import 'locale/I18n'

const Introduction = dynamic(() => import('components/organisms/Introduction'))
const Oss = dynamic(() => import('components/organisms/Oss'))
const Skill = dynamic(() => import('components/organisms/Skill'))
const Career = dynamic(() => import('components/organisms/EnginnerCareer'))
const Articles = dynamic(() => import('components/organisms/Articles'))
const Header = dynamic(() => import('components/organisms/Header'))
const Footer = dynamic(() => import('components/organisms/Footer'))
const BackGround = dynamic(() => import('components/atoms/BackgroundPicture'))

interface Props {
  articles: ArticleContents
}

export async function getStaticProps() {
  const { getLimitedArticles } = useArticles()
  const articles = await getLimitedArticles({ limit: 6 })
  return {
    props: {
      articles: articles,
    },
  }
}

export default function Home({ articles }: Props) {
  const { t } = useTranslation()
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <GlobalStyle />
      <title>{t('title')}</title>
      <Header />
      <Container>
        <BackGround src="/assets/overview.jpg" alt="overview" />
        <Introduction />
        <Articles articles={articles} />
        <Skill />
        <Oss />
        <Career />
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: calc(51px + 49px) 30px 30px 30px;
  ${media.lessThan('small')`
    padding: calc(51px + 49px) 15px 15px 15px;
  `}
`
