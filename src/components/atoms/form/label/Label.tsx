import React from 'react'
import styled from 'styled-components'

import { fontSize } from 'src/theme/constants'

interface Props {
  children: React.ReactNode
}

export function Label({ children }: Props) {
  return <LabelItem>{children}</LabelItem>
}

const LabelItem = styled.label`
  display: flex;
  align-items: center;
  font-size: ${fontSize.XS};
  padding-bottom: 1rem;
  font-weight: bold;
`
