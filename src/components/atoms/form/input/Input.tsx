import React, { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { borderRadius, color, fontSize } from 'src/theme/constants'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, Props>(function Element(
  { hasError = false, ...props }: Props,
  ref
) {
  return (
    <StyledInput ref={ref} hasError={hasError} role={'textbox'} {...props} />
  )
})

const StyledInput = styled.input<{ hasError: boolean }>`
  width: 100%;
  flex: 1;
  height: 100%;
  min-height: 40px;
  font-size: ${fontSize.S};
  text-indent: 10px;
  background-color: ${color.BLACK};
  border: 1px solid ${color.WHITE};
  border-radius: ${borderRadius.DEFAULT};
  ${({ hasError }) =>
    hasError &&
    css`
      border: 2px solid ${color.WARNING};
    `}
`
