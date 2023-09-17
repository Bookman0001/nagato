import React from 'react'
import styled from 'styled-components'

import { MainTitle } from 'src/components/atoms/mainTitle'
import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'
import { Post } from 'src/components/organisms/meta/post'
import { useTransitionPage } from 'src/hooks/router/useTransitionPage'
import { color, deviceWidth, fontSize } from 'src/theme/constants'
import type { Article } from 'src/types'

interface Props {
  article: Article
  children: React.ReactNode
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
  margin: 3rem auto;
  font-size: ${fontSize.S};
  @media (max-width: ${deviceWidth.PHONE}) {
    font-size: ${fontSize.XS};
    padding: 0 2rem;
  }
`

const Main = styled.main`
  display: flex;
  align-items: center;
  line-height: 2;
  @media (max-width: ${deviceWidth.TABLET}) {
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
  font-size: ${fontSize.S};
  font-weight: bold;
  color: ${color.BLUE};
  @media (max-width: ${deviceWidth.TABLET}) {
    font-size: ${fontSize.XS};
  }
`
