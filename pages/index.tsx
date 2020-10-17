import { useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { Article } from 'types'
import { ArticlesController } from 'controller/articles'
import { GlobalStyle } from 'theme'
import Introduction from 'components/organisms/Introduction'
import Oss from 'components/organisms/Oss'
import Skill from 'components/organisms/Skill'
import EnginnerCareer from 'components/organisms/EnginnerCareer'
import Articles from 'components/organisms/Articles'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import BackGroundPicture from 'components/atoms/BackgroundPicture'

interface Props {
  articles: Article[]
}

export async function getStaticProps() {
  const { getArticles } = ArticlesController()
  const articles = await getArticles()
  return {
    props: {
      articles: articles,
    },
  }
}

export default function Home({ articles }: Props) {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <GlobalStyle />
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
  padding: 30px;
  ${media.lessThan('small')`
    padding: 15px;
  `}
`

const PictureContainer = styled.div`
  margin-top: 51px;
`
