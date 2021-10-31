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
          src="/assets/icon.jpg"
          alt={'my-icon'}
          width={200}
          height={200}
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
  padding: 250px 0 170px;
  div {
    padding: 0 50px;
  }
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    padding: 155px 0 105px;
  }
`
