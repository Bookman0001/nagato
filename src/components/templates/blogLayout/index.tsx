import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'
import MainTitle from 'src/components/atoms/mainTitle'

interface Props {
  title: string
  children: React.ReactChild
}

export default function BlogLayout({ title, children }: Props) {
  return (
    <>
      <Header hideLangSwitch />
      <Container>
        <TitleWrapper>
          <MainTitle>{title}</MainTitle>
        </TitleWrapper>
        <Main>{children}</Main>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  max-width: 768px;
  padding: 30px;
  margin: 50px auto 150px;
  font-size: 1rem;
  ${media.lessThan('small')`
    padding: 15px;
  `}
`

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
