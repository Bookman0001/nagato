import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export default function ParagraphContent({ children }: Props) {
  return <Paragraph>{children}</Paragraph>
}

const Paragraph = styled.p`
  line-height: 1.7;
`
