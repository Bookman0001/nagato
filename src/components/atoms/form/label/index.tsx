import React from 'react'
import styled from 'styled-components'

import { FONT_SIZE } from 'src/theme/constants'

interface Props {
  children: React.ReactChild
}

export default function Label({ children }: Props) {
  return <LabelItem>{children}</LabelItem>
}

const LabelItem = styled.label`
  display: flex;
  align-items: center;
  font-size: ${FONT_SIZE.XS};
  padding-bottom: 1rem;
  font-weight: bold;
`
