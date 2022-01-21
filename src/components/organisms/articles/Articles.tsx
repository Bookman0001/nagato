import styled from 'styled-components'

import { ArticlesPagination } from 'src/types'
import { useTransitionPage } from 'src/hooks/router/transitionPage'
import { ArticleContent } from 'src/components/molecures/articleContent'
import { Button } from 'src/components/atoms/button'
import { FONT_SIZE } from 'src/theme/constants'

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
  margin-bottom: 4rem;
`

const DetailWrapper = styled.div`
  margin: 0;
`

const Wrapper = styled.div`
  padding-bottom: 3rem;
  :last-child {
    padding-bottom: 0;
  }
`

const ButtonWrapper = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  button {
    height: 3rem;
    font-size: ${FONT_SIZE.S};
  }
`
