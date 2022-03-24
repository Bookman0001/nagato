import styled from 'styled-components'

import { SearchInputArea } from 'src/components/organisms/searchInputArea'
import { Articles, Skeletons } from 'src/components/organisms/searchedArticles'
import { SearchLayout } from 'src/components/templates/searchLayout'
import { useSearchedArticles } from 'src/hooks/articles'
import { useSearchParams } from 'src/hooks/router/searchParams'
import { DEVICE_WIDTH, FONT_SIZE } from 'src/theme/constants'

export type OptionalQuery = {
  keyword?: string
  page?: string
}

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
            <SearchInputArea defaultKeyword={params.keyword} />
          </InputWrapper>
          <Skeletons itemCount={10} />
        </Section>
      </SearchLayout>
    )
  }

  return (
    <SearchLayout>
      <Section>
        <InputWrapper>
          <SearchInputArea defaultKeyword={params.keyword} />
        </InputWrapper>
        <Articles currentIndex={Number(params.page) || 1} articles={articles} />
      </Section>
    </SearchLayout>
  )
}

const Section = styled.section`
  max-width: 600px;
  min-height: calc(100vh - 50px - 60px);
  padding: 4rem 0 0;
  margin: 0 auto;
  @media (max-width: ${DEVICE_WIDTH.TABLET}) {
    padding: 4rem 2rem 0;
  }
`

const InputWrapper = styled.div``

const ErrorContainer = styled.div`
  max-width: 600px;
  height: calc(100vh - 50px - 60px);
  padding-top: 4rem;
  margin: 0 auto;
  font-size: ${FONT_SIZE.S};
  display: flex;
  justify-content: center;
  align-items: center;
`
