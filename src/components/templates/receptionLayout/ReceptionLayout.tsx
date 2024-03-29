import React from 'react'
import styled from 'styled-components'

import { Rectangle } from 'src/components/atoms/icon'
import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'
import { Default } from 'src/components/organisms/meta/default'

interface Props {
  children: React.ReactNode
}

export function ReceptionLayout({ children }: Props) {
  return (
    <>
      <Default />
      <Header />
      <Container>
        <Rectangle size={180} />
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
