import React from 'react'
import styled from 'styled-components'

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
  font-size: 32px;
  @media (max-width: 450px) {
    padding: 30px;
    font-size: 28px;
    span {
      font-size: 40px;
    }
  }
`
