import { useRouter } from 'next/router'
import styled from 'styled-components'
import sanitizeHtml from 'sanitize-html'

import { articlesController } from 'src/controller/articles'
import { articleController } from 'src/controller/article'
import BlogLayout from 'src/components/templates/blogLayout'
import { Article } from 'src/types'
import { COLOR, DEVICE_WIDTH } from 'src/theme/constants'

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
  const router = useRouter()

  return (
    <BlogLayout title={article.title} article={article}>
      <div>
        <Content
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
        />
        <LinkWrapper onClick={() => router.back()}>
          <StyledLink>Back</StyledLink>
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
  font-size: 1.25rem;
  font-weight: bold;
  color: ${COLOR.BLUE};
  @media (max-width: ${DEVICE_WIDTH.TABLET}) {
    font-size: 1rem;
  }
`
