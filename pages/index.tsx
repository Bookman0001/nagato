import { useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'

import { ArticleContents } from 'types'
import { articlesService } from 'hooks/articles'
import { GlobalStyle } from 'theme'
import Introduction from 'components/organisms/introduction'
import Oss from 'components/organisms/oss'
import Skill from 'components/organisms/skill'
import EnginnerCareer from 'components/organisms/enginnerCareer'
import Articles from 'components/organisms/articles'
import Header from 'components/organisms/header'
import Footer from 'components/organisms/footer'
import BackGroundPicture from 'components/atoms/backgroundPicture'

interface Props {
  articles: ArticleContents
}

export async function getStaticProps() {
  const { getLimitedArticles } = articlesService()
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
      <PictureContainer>
        <BackGroundPicture src="/assets/overview.jpg" alt="overview" />
      </PictureContainer>
      <Container>
        <Introduction />
        <Articles articles={articles} />
        <Skill />
        <Oss />
        <EnginnerCareer />
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: 30px 0;
  ${media.lessThan('medium')`
    padding: 30px;
  `}
`

const PictureContainer = styled.div`
  margin-top: 50px;
`
