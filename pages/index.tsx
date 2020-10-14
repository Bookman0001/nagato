import fs from 'fs'
import { useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { Blogs } from 'types'
import { readContentFiles } from 'lib/blogPostLoader'
import { GlobalStyle } from 'theme'
import Introduction from 'components/organisms/Introduction'
import Oss from 'components/organisms/Oss'
import Skill from 'components/organisms/Skill'
import EnginnerCareer from 'components/organisms/EnginnerCareer'
import Blog from 'components/organisms/Blog'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import BackGroundPicture from 'components/atoms/BackgroundPicture'

export async function getStaticProps() {
  const LIST_MAX_COUNT = 7
  const posts = await readContentFiles({ fs })
  return {
    props: {
      posts: posts.slice(0, LIST_MAX_COUNT),
    },
  }
}

export default function Home({ posts }: Blogs) {
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
        <Blog posts={posts} />
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
