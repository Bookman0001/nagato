import React from 'react'
import styled from 'styled-components'

import { deviceWidth, fontSize } from 'src/theme/constants'

interface Props {
  children: React.ReactNode
}

export function Title({ children }: Props) {
  return <TitleContainer>{children}</TitleContainer>
}

const TitleContainer = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  padding-bottom: 2rem;
  font-size: ${fontSize.L};
  @media (max-width: ${deviceWidth.PHONE}) {
    font-size: ${fontSize.M};
  }
`
