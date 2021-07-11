import React from 'react'
import styled from 'styled-components'

import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'
import BackGroundPicture from 'src/components/atoms/backgroundPicture'

interface Props {
  children: React.ReactChild
}

export default function TopLayout({ children }: Props) {
  return (
    <>
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
  margin: 50px 0 70px;
  @media (max-width: 768px) {
    margin: 50px 0 20px;
  }
`
