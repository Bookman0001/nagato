import React from 'react'
import styled from 'styled-components'

import MetaTag from 'src/components/organisms/meta/default'
import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'
import MyIcon from 'src/components/atoms/myIcon'
import { DEVICE_WIDTH } from 'src/theme/constants'

interface Props {
  children: React.ReactChild
}

export default function TopLayout({ children }: Props) {
  return (
    <>
      <MetaTag />
      <Header />
      <PictureContainer>
        <MyIcon size={220} />
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
  padding: 10rem 0 5rem;
  div {
    padding: 0 50px;
  }
  @media (max-width: ${DEVICE_WIDTH.TABLET}) {
    padding: 250px 0 170px;
  }
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    padding: 15rem 0 10rem;
  }
`
