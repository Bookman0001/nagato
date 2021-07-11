import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useSearchedArticles } from 'src/hooks/search/articles'
import SearchedLayout from 'src/components/templates/searchedLayout'
import SearchedArticles from 'src/components/organisms/searchedArticles'
import Search from 'src/components/organisms/search'
import { SearchParams } from 'src/types'

export default function Posts() {
  const router = useRouter()
  const { keyword } = router.query
  const params: SearchParams = { searchWord: keyword as string }
  const { articles, error, isLoading } = useSearchedArticles(params)

  if (error) {
    return (
      <SearchedLayout>
        <ErrorContainer>Error happened!</ErrorContainer>
      </SearchedLayout>
    )
  }

  if (isLoading || !articles) {
    return (
      <SearchedLayout>
        <LoadingContainer>Loading...</LoadingContainer>
      </SearchedLayout>
    )
  }

  return (
    <SearchedLayout>
      <Section>
        <SearchWrapper>
          <Search defaultKeyword={String(keyword) || ''} />
        </SearchWrapper>
        <SearchedArticles articles={articles} />
      </Section>
    </SearchedLayout>
  )
}

const Section = styled.section`
  max-width: 768px;
  min-height: calc(100vh - 50px - 60px);
  padding: 50px 0 0 0;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 50px 30px 0;
  }
`

const SearchWrapper = styled.div`
  margin-top: 50px;
`

const LoadingContainer = styled.div`
  max-width: 768px;
  height: calc(100vh - 50px - 60px);
  padding-top: 50px;
  margin: 0 auto;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorContainer = styled(LoadingContainer)``
