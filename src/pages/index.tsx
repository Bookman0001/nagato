import styled from 'styled-components'

import { ArticleContents } from 'src/types'
import { articlesController } from 'src/controller/articles'
import Introduction from 'src/components/organisms/introduction'
import TopLayout from 'src/components/templates/topLayout'
import Oss from 'src/components/organisms/oss'
import Articles from 'src/components/organisms/articles'
import SearchInputArea from 'src/components/organisms/searchInputArea'

interface Props {
  articles: ArticleContents
}

export async function getStaticProps() {
  const { getLimitedArticles } = articlesController()
  const articles = await getLimitedArticles({ limit: 6 })
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
        <Oss />
        <Articles articles={articles} />
        <SearchInputArea defaultSearchWord={''} />
      </Container>
    </TopLayout>
  )
}

const Container = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: 30px 0;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`
