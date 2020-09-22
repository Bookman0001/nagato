import React from 'react'
import styled from 'styled-components'

import Picture from '../atoms/Picture'

export default function Header() {
  return (
    <HeaderContainer>
      <p>
        <Link href="/">Kengo Okamoto</Link>
      </p>
      <Link href="mailto:odonel51486666@gmail.com">
        <Picture src={'/assets/mail.png'} alt={'mail'} width={25} height={25} />
      </Link>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 1000;
  width: 100%;
  height: 60px;
  p {
    font-size: 16px;
    margin: 20px;
    color: #303030;
  }
`

const Link = styled.a`
  width: 25px;
  margin: 0 10px;
`
