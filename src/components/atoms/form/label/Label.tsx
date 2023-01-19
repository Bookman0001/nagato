import React, { LabelHTMLAttributes } from 'react'
import styled from 'styled-components'

import { fontSize } from 'src/theme/constants'

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export function Label({ children, ...rest }: Props) {
  return <LabelItem {...rest}>{children}</LabelItem>
}

const LabelItem = styled.label`
  display: flex;
  align-items: center;
  font-size: ${fontSize.XS};
  padding-bottom: 1rem;
  font-weight: bold;
`
