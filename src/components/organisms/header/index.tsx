import styled from 'styled-components'
import Link from 'next/link'

import Image from 'src/components/atoms/picture'
import { COLOR, DEVICE_WIDTH } from 'src/theme/constants'

export default function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Link href="/">
          <StyledLink>
            <Image
              src={'/favicon.ico'}
              alt={'move to top page'}
              width={30}
              height={30}
            />
          </StyledLink>
        </Link>
      </Container>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${COLOR.WHITE};
  border-bottom: 1px solid ${COLOR.GRAY};
  z-index: 1000;
  color: ${COLOR.BLACK};
  font-size: 0.75rem;
`

const Container = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  @media (min-width: ${DEVICE_WIDTH.PC}) {
    max-width: 768px;
    margin: 0 auto;
  }
`

const StyledLink = styled.div`
  cursor: pointer;
  margin-left: 15px;
  @media (min-width: ${DEVICE_WIDTH.PC}) {
    margin-left: 0;
  }
`
