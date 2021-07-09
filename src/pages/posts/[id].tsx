import styled from 'styled-components'
import media from 'styled-media-query'
import { useRouter } from 'next/router'

import { articlesController } from 'src/controller/articles'
import { articleController } from 'src/controller/article'
import BlogLayout from 'src/components/templates/blogLayout'
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
  const router = useRouter()

  return (
    <BlogLayout title={article.title}>
      <div>
        <Content dangerouslySetInnerHTML={{ __html: article.content }} />
        <LinkWrapper onClick={() => router.back()}>
          <StyledLink>←Back</StyledLink>
        </LinkWrapper>
      </div>
    </BlogLayout>
  )
}

const LinkWrapper = styled.div``

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
