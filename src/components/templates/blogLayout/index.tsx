import React from 'react'
import styled from 'styled-components'

import MetaTag from 'src/components/organisms/meta/post'
import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'
import MainTitle from 'src/components/atoms/mainTitle'
import { DEVICE_WIDTH } from 'src/theme/constants'
import { Article } from 'src/types'

interface Props {
  title: string
  article: Article
  children: React.ReactChild
}

export default function BlogLayout({ title, article, children }: Props) {
  return (
    <>
      <MetaTag article={article} />
      <Header hideLangSwitch />
      <Container>
        <MainTitle>{title}</MainTitle>
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
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    padding: 15px;
  }
`

const Main = styled.main`
  margin: 10px 0;
  display: flex;
  align-items: center;
  line-height: 1.5;
  @media (max-width: ${DEVICE_WIDTH.TABLET}) {
    display: block;
  }
  p {
    line-height: 1.7;
  }
  img {
    width: 100%;
  }
`
