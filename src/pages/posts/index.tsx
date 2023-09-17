import styled from 'styled-components'

import { SearchInputArea } from 'src/components/organisms/searchInputArea'
import { Articles, Skeletons } from 'src/components/organisms/searchedArticles'
import { SearchLayout } from 'src/components/templates/searchLayout'
import { useSearchedArticles } from 'src/hooks/articles/useSearchedArticles'
import { useSearchParams } from 'src/hooks/router/useSearchParams'
import { deviceWidth } from 'src/theme/constants'

export type OptionalQuery = {
  keyword?: string
  page?: string
}

export default function Posts() {
  const { params } = useSearchParams()
  const { articles } = useSearchedArticles(params)

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
  padding: 2rem 0 0;
  margin: 0 auto;
  @media (max-width: ${deviceWidth.TABLET}) {
    padding: 2rem 2rem 0;
  }
`

const InputWrapper = styled.div``
