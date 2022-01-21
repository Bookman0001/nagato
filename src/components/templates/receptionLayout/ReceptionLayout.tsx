import React from 'react'
import styled from 'styled-components'

import { Default } from 'src/components/organisms/meta/default'
import { Header } from 'src/components/organisms/header'
import { Rectangle } from 'src/components/atoms/icon/rectangle'
import { Footer } from 'src/components/organisms/footer'

interface Props {
  children: React.ReactChild
}

export function ReceptionLayout({ children }: Props) {
  return (
    <>
      <Default />
      <Header />
      <Container>
        <Rectangle size={200} />
      </Container>
      {children}
      <Footer />
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 0;
`
