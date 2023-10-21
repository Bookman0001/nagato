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
  display: block;
  font-size: ${fontSize.XS};
  font-weight: bold;
`
