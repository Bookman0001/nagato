import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export default function Title({ children }: Props) {
  return (
    <TitleContainer>
      <>{children}</>
    </TitleContainer>
  )
}

const TitleContainer = styled.h2`
  font-size: 32px;
  span {
    font-size: 64px;
  }
`
