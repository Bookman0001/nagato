import { useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { ArticleContents } from 'types'
import { useArticles } from 'hooks/articles'
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
  const { getLimitedArticles } = useArticles()
  const articles = await getLimitedArticles({ limit: 6 })
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
      <title>k工房</title>
      <Header />
      <Container>
        <BackGroundPicture src="/assets/overview.jpg" alt="overview" />
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
  padding: calc(51px + 49px) 30px 30px 30px;
  ${media.lessThan('small')`
    padding: calc(51px + 49px) 15px 15px 15px;
  `}
`
