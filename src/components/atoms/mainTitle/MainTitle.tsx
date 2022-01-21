import React from 'react'
import styled from 'styled-components'

import { DEVICE_WIDTH, FONT_SIZE } from 'src/theme/constants'

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
  font-size: ${FONT_SIZE.L};
  padding-bottom: 4rem;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    font-size: ${FONT_SIZE.M};
  }
`
