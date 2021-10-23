import React from 'react'
import styled from 'styled-components'

import MetaTag from 'src/components/organisms/meta/default'
import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'
import Picture from 'src/components/atoms/picture'
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
        <Picture
          src={'assets/overview.jpg'}
          alt={'self-image'}
          isCircle
          width={150}
          height={150}
        />
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
  padding: 250px 0 30px;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    padding: 200px 0 30px;
  }
`
