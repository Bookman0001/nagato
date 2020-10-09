import fs from 'fs'
import path from 'path'
import styled from 'styled-components'
import media from 'styled-media-query'

import { readContentFile, listContetFileNameList } from 'lib/blogPostLoader'
import { GlobalStyle } from 'theme'
import BlogLayout from 'components/templates/BlogLayout'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

type Props = {
  title: string
  content: string
}

export async function getStaticProps({ params }) {
  const fileContent = await readContentFile({ fs, slug: params.slug })

  return {
    props: {
      title: fileContent.title,
      content: fileContent.content,
    },
  }
}

export async function getStaticPaths() {
  const paths = listContetFileNameList({ fs }).map((fileName) => ({
    params: {
      slug: String(path.parse(fileName).name),
    },
  }))

  return { paths, fallback: false }
}

export default function Post({ title, content }: Props) {
  return (
    <>
      <GlobalStyle />
      <Header hideLangSwitch />
      <Container>
        <BlogLayout title={title}>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
        </BlogLayout>
        <LinkWrapper>
          <Link href={'/'}>←Back</Link>
        </LinkWrapper>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  max-width: 768px;
  padding: 30px;
  margin: 50px auto 150px;
  font-size: 1rem;
`

const LinkWrapper = styled.div`
  display: flex;
`

const Content = styled.div``

const Link = styled.a`
  display: block;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: #0099ff;
  ${media.lessThan('medium')`
    font-size: 1rem;
  `}
`
