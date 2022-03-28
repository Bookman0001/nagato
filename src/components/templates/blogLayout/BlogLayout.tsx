import React from 'react'
import styled from 'styled-components'

import type { Article } from 'src/types'

import { MainTitle } from 'src/components/atoms/mainTitle'
import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'
import { Post } from 'src/components/organisms/meta/post'
import { DEVICE_WIDTH, FONT_SIZE } from 'src/theme/constants'

interface Props {
  title: string
  article: Article
  children: React.ReactChild
}

export function BlogLayout({ title, article, children }: Props) {
  return (
    <>
      <Post article={article} />
      <Header />
      <Container>
        <MainTitle>{title}</MainTitle>
        <Main>{children}</Main>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  font-size: ${FONT_SIZE.S};
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    padding: 0 2rem;
  }
`

const Main = styled.main`
  display: flex;
  align-items: center;
  line-height: 2;
  @media (max-width: ${DEVICE_WIDTH.TABLET}) {
    display: block;
  }
  p {
    line-height: 2;
  }
  img {
    width: 100%;
  }
`
