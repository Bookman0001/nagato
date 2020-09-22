import { useState } from 'react'
import styled from 'styled-components'

import { GlobalStyle } from 'theme'
import Introduction from 'components/organisms/Introduction'
import Skill from 'components/organisms/Skill'
import EnginnerCareer from 'components/organisms/EnginnerCareer'
import Header from 'components/molecures/Header'
import Footer from 'components/molecures/Footer'
import BackGroundPicture from 'components/atoms/BackgroundPicture'
import Button from 'components/atoms/Button'

export default function Home() {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  return (
    <>
      <GlobalStyle />
      <Header />
      <BackGroundPicture src="/assets/overview.png" alt="overview" />
      <Container>
        <Introduction />
        <Skill />
        {isClicked ? (
          <>
            <EnginnerCareer />
          </>
        ) : (
          <ButtonWrapper>
            <Button onClick={() => setIsClicked(true)}>More View</Button>
          </ButtonWrapper>
        )}
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 30px;
`

const ButtonWrapper = styled.div`
  margin: 50px 0;
`
