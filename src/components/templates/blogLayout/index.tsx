import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import MainTitle from 'src/components/atoms/mainTitle'

interface Props {
  title: string
  children: React.ReactChild
}

export default function BlogLayout({ title, children }: Props) {
  return (
    <Container>
      <TitleWrapper>
        <MainTitle>{title}</MainTitle>
      </TitleWrapper>
      <Main>{children}</Main>
    </Container>
  )
}

const Container = styled.div``

const TitleWrapper = styled.div`
  margin-bottom: 50px;
`

const Main = styled.main`
  margin: 10px 0;
  display: flex;
  align-items: center;
  line-height: 1.5;
  ${media.lessThan('medium')`
    display: block;
  `}
  p {
    line-height: 1.7;
  }
  img {
    width: 100%;
  }
`
