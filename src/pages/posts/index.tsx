import styled from 'styled-components'

import { useSearchedArticles } from 'src/hooks/articles'
import { useSearchParams } from 'src/hooks/searchParams'
import SearchLayout from 'src/components/templates/searchLayout'
import SkeletonArticles from 'src/components/organisms/searchedArticles/skeletonArticles'
import SearchInputArea from 'src/components/organisms/searchInputArea'
import SearchedArticles from 'src/components/organisms/searchedArticles'
import { DEVICE_WIDTH } from 'src/theme/constants'

export default function Posts() {
  const { params } = useSearchParams()
  const { articles, error } = useSearchedArticles(params)

  if (error) {
    return (
      <SearchLayout>
        <ErrorContainer>Error happened!</ErrorContainer>
      </SearchLayout>
    )
  }

  if (!articles) {
    return (
      <SearchLayout>
        <Section>
          <InputWrapper>
            <SearchInputArea defaultSearchWord={params.searchWord} />
          </InputWrapper>
          <SkeletonArticles itemCount={10} />
        </Section>
      </SearchLayout>
    )
  }

  return (
    <SearchLayout>
      <Section>
        <InputWrapper>
          <SearchInputArea defaultSearchWord={params.searchWord} />
        </InputWrapper>
        <SearchedArticles
          currentIndex={Number(params.page) || 1}
          articles={articles}
        />
      </Section>
    </SearchLayout>
  )
}

const Section = styled.section`
  max-width: 768px;
  min-height: calc(100vh - 50px - 60px);
  padding: 50px 0 0 0;
  margin: 0 auto;
  @media (max-width: ${DEVICE_WIDTH.TABLET}) {
    padding: 50px 30px 0;
  }
`

const InputWrapper = styled.div`
  margin-top: 50px;
`

const ErrorContainer = styled.div`
  max-width: 768px;
  height: calc(100vh - 50px - 60px);
  padding-top: 50px;
  margin: 0 auto;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
