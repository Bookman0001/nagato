import React from 'react'
import styled from 'styled-components'

import { DEVICE_WIDTH } from 'src/theme/constants'

interface Props {
  children: React.ReactNode
}

export default function MainTitle({ children }: Props) {
  return (
    <TitleContainer>
      <>{children}</>
    </TitleContainer>
  )
}

const TitleContainer = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  font-size: 2rem;
  padding-bottom: 50px;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    font-size: 1.5rem;
    span {
      font-size: 2.5rem;
    }
  }
`
