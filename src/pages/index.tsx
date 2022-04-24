import { GetStaticProps } from 'next'
import styled from 'styled-components'

import type { ArticlesPagination } from 'src/types'

import { Articles } from 'src/components/organisms/articles'
import { Introduction } from 'src/components/organisms/introduction'
import { TopLayout } from 'src/components/templates/topLayout'
import { articlesController } from 'src/controllers/articles'
import { DEVICE_WIDTH } from 'src/theme/constants'

interface Props {
  articles: ArticlesPagination
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { getLimitedArticles } = articlesController()
  const articles = await getLimitedArticles({ limit: 5 })
  return {
    props: {
      articles: articles,
    },
  }
}

export default function Home({ articles }: Props) {
  return (
    <TopLayout>
      <Container>
        <Introduction />
        <Articles articles={articles} />
      </Container>
    </TopLayout>
  )
}

const Container = styled.main`
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: ${DEVICE_WIDTH.TABLET}) {
    padding: 0 2rem;
  }
`
