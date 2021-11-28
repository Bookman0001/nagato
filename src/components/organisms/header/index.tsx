import styled from 'styled-components'
import Link from 'next/link'

import HeaderIcon from 'src/components/atoms/icon/header'
import { COLOR, DEVICE_WIDTH } from 'src/theme/constants'

export default function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Link href="/">
          <LogoText>
            <HeaderIcon />
          </LogoText>
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
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`
