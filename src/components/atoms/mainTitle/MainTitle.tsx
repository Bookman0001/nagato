import React from 'react'
import styled from 'styled-components'

import { deviceWidth, fontSize } from 'src/theme/constants'

interface Props {
  children: React.ReactNode
}

export function MainTitle({ children }: Props) {
  return <TitleContainer>{children}</TitleContainer>
}

const TitleContainer = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  font-size: ${fontSize.L};
  padding-bottom: 4rem;
  @media (max-width: ${deviceWidth.PHONE}) {
    font-size: ${fontSize.M};
  }
`
