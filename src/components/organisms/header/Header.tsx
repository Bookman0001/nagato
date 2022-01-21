import styled from 'styled-components'
import Link from 'next/link'

import { Header as Icon } from 'src/components/atoms/icon/header'
import { COLOR, DEVICE_WIDTH, FONT_SIZE, Z_INDEX } from 'src/theme/constants'

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Link href="/" passHref>
          <LogoText>
            <Icon />
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
  z-index: ${Z_INDEX.TOP_MOST};
  color: ${COLOR.BLACK};
  font-size: ${FONT_SIZE.XXS};
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
