import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'

import { ArticleContents } from 'src/types'
import { articlesController } from 'src/controller/articles'
import { GlobalStyle } from 'src/theme'
import Introduction from 'src/components/organisms/introduction'
import Oss from 'src/components/organisms/oss'
import EnginnerCareer from 'src/components/organisms/enginnerCareer'
import Articles from 'src/components/organisms/articles'
import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'
import BackGroundPicture from 'src/components/atoms/backgroundPicture'

interface Props {
  articles: ArticleContents
}

export async function getStaticProps() {
  const { getLimitedArticles } = articlesController()
  const articles = await getLimitedArticles({ limit: 6 })
  return {
    props: {
      articles: articles,
    },
  }
}

export default function Home({ articles }: Props) {
  const { t } = useTranslation()

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
        <Oss />
        <EnginnerCareer />
        <Articles articles={articles} />
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
  margin: 50px 0 70px;
  ${media.lessThan('medium')`
    margin: 50px 0 20px;
  `}
`
