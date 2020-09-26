import fs from 'fs'
import styled from 'styled-components'

import { Blogs } from 'types'
import { readContentFiles } from 'lib/blogPostLoader'
import { GlobalStyle } from 'theme'
import Introduction from 'components/organisms/Introduction'
import Oss from 'components/organisms/Oss'
import Skill from 'components/organisms/Skill'
import EnginnerCareer from 'components/organisms/EnginnerCareer'
import Blog from 'components/organisms/Blog'
import Header from 'components/molecures/Header'
import Footer from 'components/molecures/Footer'
import BackGroundPicture from 'components/atoms/BackgroundPicture'

export async function getStaticProps() {
  const LIST_MAX_COUNT = 5
  const posts = await readContentFiles({ fs })
  return {
    props: {
      posts: posts.slice(0, LIST_MAX_COUNT),
    },
  }
}

export default function Home({ posts }: Blogs) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PictureContainer>
        <BackGroundPicture src="/assets/overview.png" alt="overview" />
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

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`

const PictureContainer = styled.div`
  margin-top: 50px;
`
