import React, { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { BORDER_RADIUS, COLOR, FONT_SIZE } from 'src/theme/constants'

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
  font-size: ${FONT_SIZE.S};
  text-indent: 10px;
  background-color: ${COLOR.BLACK};
  border: 1px solid ${COLOR.WHITE};
  border-radius: ${BORDER_RADIUS.DEFAULT};
  ${({ hasError }) =>
    hasError &&
    css`
      border: 2px solid ${COLOR.WARNING};
    `}
`
