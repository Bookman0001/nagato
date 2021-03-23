import { useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

import { useArticles } from 'hooks/articles'
import { useArticle } from 'hooks/article'
import { useBreadCrumb } from 'hooks/routes'
import { GlobalStyle } from 'theme'
import BlogLayout from 'components/templates/blogLayout'
import Header from 'components/organisms/header'
import Footer from 'components/organisms/footer'
import BreadCrumb from 'components/atoms/breadCrumb'
import { Article } from 'types'
import { COLOR } from 'theme/constants'

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
  const { t } = useTranslation()
  const { crumbContentsInArticle } = useBreadCrumb()

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <GlobalStyle />
      <title>{t('title')}</title>
      <Header hideLangSwitch />
      <Container>
        <CrumbContainer>
          <BreadCrumb contents={crumbContentsInArticle} />
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
