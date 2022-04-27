import React from 'react'
import styled from 'styled-components'

import type { Article } from 'src/types'

import { MainTitle } from 'src/components/atoms/mainTitle'
import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'
import { Post } from 'src/components/organisms/meta/post'
import { useTransitionPage } from 'src/hooks/router/transitionPage'
import { COLOR, DEVICE_WIDTH, FONT_SIZE } from 'src/theme/constants'

interface Props {
  article: Article
  children: React.ReactChild
}

export function BlogLayout({ article, children }: Props) {
  const { transitionToTop } = useTransitionPage()

  return (
    <>
      <Post article={article} />
      <Header />
      <Container>
        <MainTitle>{article.title}</MainTitle>
        <Main>{children}</Main>
        <LinkWrapper onClick={transitionToTop}>
          <StyledLink>Back To Top</StyledLink>
        </LinkWrapper>
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

const LinkWrapper = styled.div``

const StyledLink = styled.span`
  display: block;
  cursor: pointer;
  padding-top: 50px;
  width: 100%;
  font-size: ${FONT_SIZE.S};
  font-weight: bold;
  color: ${COLOR.BLUE};
  @media (max-width: ${DEVICE_WIDTH.TABLET}) {
    font-size: ${FONT_SIZE.XS};
  }
`
