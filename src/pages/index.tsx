import { GetStaticProps } from 'next'
import styled from 'styled-components'

import { Articles } from 'src/components/organisms/articles'
import { Introduction } from 'src/components/organisms/introduction'
import { TopLayout } from 'src/components/templates/topLayout'
import { articlesController } from 'src/controllers/articles'
import { deviceWidth } from 'src/theme/constants'
import type { ArticlesPagination } from 'src/types'

interface Props {
  articles: ArticlesPagination
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { getLimitedArticles } = articlesController()
  const articles = await getLimitedArticles({ limit: 5 })
  return {
    props: {
      articles,
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
  @media (max-width: ${deviceWidth.TABLET}) {
    padding: 0 2rem;
  }
`
