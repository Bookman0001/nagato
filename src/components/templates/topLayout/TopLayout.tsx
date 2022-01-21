import React from 'react'
import styled from 'styled-components'

import { Default } from 'src/components/organisms/meta/default'
import { Header } from 'src/components/organisms/header'
import { Footer } from 'src/components/organisms/footer'
import { Rectangle } from 'src/components/atoms/icon/rectangle'

interface Props {
  children: React.ReactChild
}

export function TopLayout({ children }: Props) {
  return (
    <>
      <Default />
      <Header />
      <PictureContainer>
        <Rectangle size={200} />
      </PictureContainer>
      {children}
      <Footer />
    </>
  )
}

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  div {
    padding: 0 50px;
  }
`
