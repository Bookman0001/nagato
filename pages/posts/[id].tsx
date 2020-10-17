import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

import { ArticlesController } from 'controller/articles'
import { ArticleController } from 'controller/article'
import { GlobalStyle } from 'theme'
import BlogLayout from 'components/templates/BlogLayout'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import { Article } from 'types'

type Props = {
  article: Article
}

export async function getStaticProps({ params }) {
  const { getArticle } = ArticleController()
  const article = await getArticle(params.id)
  return {
    props: {
      article: article,
    },
  }
}

export async function getStaticPaths() {
  const { getArticles } = ArticlesController()
  const articles = await getArticles()
  const paths = articles.map((article) => `/posts/${article.id}`)
  return { paths, fallback: false }
}

export default function Post({ article }: Props) {
  const router = useRouter()
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <GlobalStyle />
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
