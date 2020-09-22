import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export default function ParagraphContent({ children }: Props) {
  return (
    <Container>
      <Paragraph>{children}</Paragraph>
    </Container>
  )
}

const Container = styled.div``

const Paragraph = styled.p`
  line-height: 2;
`
