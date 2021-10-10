import { useRouter } from 'next/router'
import styled from 'styled-components'

import { ArticleContents } from 'src/types'
import ArticleContent from 'src/components/molecures/articleContent'
import Title from 'src/components/atoms/title'
import Button from 'src/components/atoms/button'
import { DEVICE_WIDTH } from 'src/theme/constants'

interface Props {
  articles: ArticleContents
}

export default function Articles({ articles }: Props) {
  const router = useRouter()
  const { contents } = articles

  if (!contents.length) return null

  const handleClick = () => {
    router.push({ pathname: '/posts' })
  }

  return (
    <Section>
      <Title>Articles</Title>
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
        <Button onClick={handleClick} text={'See more'} />
      </ButtonWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 100px;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    margin-bottom: 50px;
  }
`

const DetailWrapper = styled.div`
  margin: 0;
`

const Wrapper = styled.div`
  padding-bottom: 50px;
  :last-child {
    padding-bottom: 0;
  }
`

const ButtonWrapper = styled.div`
  padding-top: 50px;
  button {
    display: flex;
    justify-content: center;
    height: 40px;
    font-size: 1.25rem;
    @media (max-width: ${DEVICE_WIDTH.TABLET}) {
      width: 50px;
    }
  }
`
