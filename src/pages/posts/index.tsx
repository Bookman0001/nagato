import { useRouter } from 'next/router'
import styled from 'styled-components'
import media from 'styled-media-query'

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
  height: calc(100vh - 70px);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const ErrorContainer = styled(LoadingContainer)``
