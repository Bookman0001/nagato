import sanitizeHtml from 'sanitize-html'
import styled from 'styled-components'

import { BlogLayout } from 'src/components/templates/blogLayout'
import { articleController } from 'src/controllers/article'
import { articlesController } from 'src/controllers/articles'
import { useTransitionPage } from 'src/hooks/router/transitionPage'
import { COLOR, DEVICE_WIDTH, FONT_SIZE } from 'src/theme/constants'
import { Article } from 'src/types'

interface Params {
  params: {
    id: string
  }
}

interface Props {
  article: Article
}

export async function getStaticPaths() {
  const { getAllArticleIds } = articlesController()
  const articleIds = await getAllArticleIds()
  const paths = articleIds.map((id) => `/posts/${id}`)
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
  const { transitionToTop } = useTransitionPage()

  return (
    <BlogLayout title={article.title} article={article}>
      <div>
        <Content
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
        />
        <LinkWrapper onClick={transitionToTop}>
          <StyledLink>Back To Top</StyledLink>
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
  padding-top: 50px;
  width: 100%;
  font-size: ${FONT_SIZE.S};
  font-weight: bold;
  color: ${COLOR.BLUE};
  @media (max-width: ${DEVICE_WIDTH.TABLET}) {
    font-size: ${FONT_SIZE.XS};
  }
`
