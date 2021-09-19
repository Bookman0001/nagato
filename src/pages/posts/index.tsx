import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useSearchedArticles } from 'src/hooks/articles'
import BasicLayout from 'src/components/templates/basicLayout'
import SearchedArticles from 'src/components/organisms/searchedArticles'
import Search from 'src/components/organisms/search'
import { SearchParams } from 'src/types'

export default function Posts() {
  const router = useRouter()
  const { keyword, page } = router.query
  const searchWord = (keyword as string) || ''
  const defaultPage = (page as string) || '1'
  const params: SearchParams = { searchWord: searchWord, page: defaultPage }
  const { articles, error, isLoading } = useSearchedArticles(params)

  const handleClick = (index: number) => {
    router.push({
      pathname: '/posts',
      query: { keyword: keyword, page: String(index) },
    })
  }

  if (error) {
    return (
      <BasicLayout hideLangSwitch>
        <ErrorContainer>Error happened!</ErrorContainer>
      </BasicLayout>
    )
  }

  if (isLoading || !articles) {
    return (
      <BasicLayout hideLangSwitch>
        <LoadingContainer>Loading...</LoadingContainer>
      </BasicLayout>
    )
  }

  return (
    <BasicLayout hideLangSwitch>
      <Section>
        <SearchWrapper>
          <Search defaultSearchWord={searchWord} />
        </SearchWrapper>
        <SearchedArticles
          currentIndex={Number(defaultPage) || 1}
          articles={articles}
          onClick={handleClick}
        />
      </Section>
    </BasicLayout>
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
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorContainer = styled(LoadingContainer)``
