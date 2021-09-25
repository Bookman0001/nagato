import React from 'react'
import styled from 'styled-components'

import MetaTag from 'src/components/organisms/meta/default'
import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'
import BackGroundPicture from 'src/components/atoms/backgroundPicture'
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
        <BackGroundPicture src="/assets/overview.jpg" alt="overview" />
      </PictureContainer>
      {children}
      <Footer />
    </>
  )
}

const PictureContainer = styled.div`
  margin: 50px 0 100px;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    margin: 50px 0 50px;
  }
`
