import styled from 'styled-components'
import Link from 'next/link'

import { COLOR, DEVICE_WIDTH } from 'src/theme/constants'

export default function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Link href="/">
          <LogoText> K Atlier</LogoText>
        </Link>
      </Container>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${COLOR.WHITE};
  border-bottom: 1px solid ${COLOR.GRAY};
  z-index: 1000;
  color: ${COLOR.BLACK};
  font-size: 0.75rem;
  @media (prefers-color-scheme: dark) {
    background-color: ${COLOR.BLACK};
    color: ${COLOR.WHITE};
  }
`

const Container = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  @media (min-width: ${DEVICE_WIDTH.PC}) {
    max-width: 600px;
    margin: 0 auto;
  }
`

const LogoText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  left: 50%;
  margin-left: -1.6rem;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`
