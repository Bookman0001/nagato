import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

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
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  padding-bottom: 30px;
  font-size: 32px;
  ${media.lessThan('small')`
    font-size: 28px;
  `}
`
