import { useRouter } from 'next/router'
import styled from 'styled-components'
import media from 'styled-media-query'

import { GlobalStyle } from 'src/theme'
import { useSearchedArticles } from 'src/hooks/search/articles'
import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'
import ArticleContent from 'src/components/molecures/articleContent'
import Search from 'src/components/organisms/search'
import { SearchParams } from 'src/types'

export default function Posts() {
  const router = useRouter()
  const { keyword } = router.query
  const searchKeyword = keyword
  const params: SearchParams = { searchWord: searchKeyword }
  const { articles, error, isLoading } = useSearchedArticles(params)

  if (isLoading) return <>now loading</>

  if (error) return <div>error happened!</div>

  return (
    <>
      <GlobalStyle />
      <Header />
      <Section>
        <SearchWrapper>
          <Search defaultKeyword={String(searchKeyword)} />
        </SearchWrapper>
        <DetailWrapper>
          <DetailWrapper>
            {articles?.contents.map((article) => {
              return (
                <div key={article.id}>
                  <ArticleContent article={article} />
                </div>
              )
            })}
          </DetailWrapper>
        </DetailWrapper>
      </Section>
      <Footer />
    </>
  )
}

const Section = styled.section`
  max-width: 768px;
  min-height: calc(100vh - 50px - 80px);
  margin: 0 auto;
  padding: 30px 0;
  ${media.lessThan('medium')`
    padding: 30px;
  `}
`

const SearchWrapper = styled.div`
  margin-top: 50px;
`

const DetailWrapper = styled.div`
  margin: 0;
`
