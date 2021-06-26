import { useRouter } from 'next/router'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'

import { GlobalStyle } from 'src/theme'
import { useSearchedArticles } from 'src/hooks/search/articles'
import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'
import SearchedArticles from 'src/components/organisms/searchedArticles'
import Search from 'src/components/organisms/search'
import { SearchParams } from 'src/types'

export default function Posts() {
  const { t } = useTranslation()
  const router = useRouter()
  const { keyword } = router.query
  const params: SearchParams = { searchWord: keyword }
  const { articles, error, isLoading } = useSearchedArticles(params)

  if (isLoading || !articles) {
    return <LoadingContainer>Loading...</LoadingContainer>
  }

  if (error) {
    return <ErrorContainer>Error happened!</ErrorContainer>
  }

  return (
    <>
      <GlobalStyle />
      <title>{t('title')}</title>
      <Header />
      <Section>
        <SearchWrapper>
          <Search defaultKeyword={String(keyword)} />
        </SearchWrapper>
        <SearchedArticles articles={articles} />
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

const LoadingContainer = styled.div`
  padding-top: 80px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const ErrorContainer = styled(LoadingContainer)``
