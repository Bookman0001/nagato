import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactChild
}

export default function Label({ children }: Props) {
  return <LabelItem>{children}</LabelItem>
}

const LabelItem = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding-bottom: 1rem;
  font-weight: bold;
`
