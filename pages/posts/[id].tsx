import { useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

import { useArticles } from 'controllers/articles'
import { useArticle } from 'controllers/article'
import { GlobalStyle } from 'theme'
import BlogLayout from 'components/templates/BlogLayout'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import { Article } from 'types'

interface Params {
  params: {
    id: string
  }
}

interface Props {
  article: Article
}

export async function getStaticPaths() {
  const { getAllArticles } = useArticles()
  const articles = await getAllArticles()
  const { contents } = articles
  const paths = contents.map((article) => `/posts/${article.id}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: Params) {
  const { getArticle } = useArticle()
  const article = await getArticle(params.id)
  return {
    props: {
      article: article,
    },
  }
}

export default function Post({ article }: Props) {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <GlobalStyle />
      <title>k工房</title>
      <Header hideLangSwitch />
      <Container>
        <BlogLayout title={article.title}>
          <Content dangerouslySetInnerHTML={{ __html: article.content }} />
        </BlogLayout>
        <LinkWrapper>
          <Link href={'/'}>
            <StyledLink>←Back</StyledLink>
          </Link>
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
  ${media.lessThan('small')`
    padding: 15px;
  `}
`

const LinkWrapper = styled.div`
  display: flex;
`

const Content = styled.div``

const StyledLink = styled.span`
  display: block;
  cursor: pointer;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: #0099ff;
  ${media.lessThan('medium')`
    font-size: 1rem;
  `}
`
