import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

import { articlesController } from 'src/controller/articles'
import { articleController } from 'src/controller/article'
import { useBreadcrumb } from 'src/hooks/routes'
import { GlobalStyle } from 'src/theme'
import BlogLayout from 'src/components/templates/blogLayout'
import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'
import Breadcrumb from 'src/components/atoms/breadcrumb'
import { Article } from 'src/types'
import { COLOR } from 'src/theme/constants'

interface Params {
  params: {
    id: string
  }
}

interface Props {
  article: Article
}

export async function getStaticPaths() {
  const { getAllArticles } = articlesController()
  const articles = await getAllArticles()
  const { contents } = articles
  const paths = contents.map((article) => `/posts/${article.id}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: Params) {
  const { getArticle } = articleController()
  const article = await getArticle(params.id)
  return {
    props: {
      article: article,
    },
  }
}

export default function Post({ article }: Props) {
  const { t } = useTranslation()
  const { crumbContentsInArticle } = useBreadcrumb()

  return (
    <>
      <GlobalStyle />
      <title>{t('title')}</title>
      <Header hideLangSwitch />
      <Container>
        <CrumbContainer>
          <Breadcrumb contents={crumbContentsInArticle} />
        </CrumbContainer>
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
  color: ${COLOR.BLUE};
  ${media.lessThan('medium')`
    font-size: 1rem;
  `}
`

const CrumbContainer = styled.div`
  padding-bottom: 30px;
`
