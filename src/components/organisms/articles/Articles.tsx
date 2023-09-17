import styled from 'styled-components'

import { Button } from 'src/components/atoms/button'
import { ArticleContent } from 'src/components/molecures/articleContent'
import { useTransitionPage } from 'src/hooks/router/useTransitionPage'
import { deviceWidth } from 'src/theme/constants'
import type { ArticlesPagination } from 'src/types'

interface Props {
  articles: ArticlesPagination
}

export function Articles({ articles }: Props) {
  const { transitionToSearch } = useTransitionPage()
  const { contents } = articles

  if (!contents.length) return null

  const handleClick = () => {
    transitionToSearch()
  }

  return (
    <Section>
      <DetailWrapper>
        {contents.map((article) => {
          return (
            <Wrapper key={article.id}>
              <ArticleContent article={article} />
            </Wrapper>
          )
        })}
      </DetailWrapper>
      <ButtonWrapper>
        <Button onClick={handleClick}>See More</Button>
      </ButtonWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 2rem;
`

const DetailWrapper = styled.div`
  margin: 0;
`

const Wrapper = styled.div`
  padding-bottom: 2rem;
  :last-child {
    padding-bottom: 0;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  button {
    height: 3rem;
  }
  @media (max-width: ${deviceWidth.PHONE}) {
    button {
      height: 2.5rem;
    }
  }
`
