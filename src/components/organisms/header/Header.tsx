import Link from 'next/link'
import styled from 'styled-components'

import { Header as Icon } from 'src/components/atoms/icon'
import { color, deviceWidth, fontSize, zIndex } from 'src/theme/constants'
import { pagesPath } from 'src/utils/$path'

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Link href={pagesPath.$url()} passHref aria-label={'TOPページに戻る'}>
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
  border-bottom: 1px solid ${color.GRAY};
  z-index: ${zIndex.TOP_MOST};
  font-size: ${fontSize.XXS};
  background-color: ${color.BLACK};
`

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: ${deviceWidth.PC}) {
    max-width: 600px;
    margin: 0 auto;
  }
`

const LogoText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 50%;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`
