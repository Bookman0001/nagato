import React from 'react'
import styled from 'styled-components'

import { MainTitle } from 'src/components/atoms/mainTitle'
import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'
import { DEVICE_WIDTH, FONT_SIZE } from 'src/theme/constants'

interface Props {
  children: React.ReactNode
}

export function ErrorLayout({ children }: Props) {
  return (
    <>
      <Header />
      <Container>
        <MainTitle>{children}</MainTitle>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  padding: 1rem;
  font-size: ${FONT_SIZE.S};
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    padding: 0 2rem;
  }
`
