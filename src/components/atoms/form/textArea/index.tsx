import React, { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { BORDER_RADIUS, COLOR, FONT_SIZE } from 'src/theme/constants'

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  rows?: number
  hasError?: boolean
}

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(function Element(
  { rows = 6, hasError = false, ...props }: Props,
  ref
) {
  return <StyledTextArea ref={ref} rows={rows} hasError={hasError} {...props} />
})

export default TextArea

const StyledTextArea = styled.textarea<{ hasError: boolean }>`
  flex: 1;
  width: calc(100% - 20px);
  font-size: ${FONT_SIZE.S};
  padding: 10px;
  border: 1px solid ${COLOR.BLACK};
  border-radius: ${BORDER_RADIUS.DEFAULT};
  background-color: ${COLOR.WHITE};
  @media (prefers-color-scheme: dark) {
    background-color: ${COLOR.BLACK};
    color: ${COLOR.WHITE};
    border: 1px solid ${COLOR.WHITE};
  }
  ${({ hasError }) =>
    hasError &&
    css`
      border: 2px solid ${COLOR.WARNING};
      @media (prefers-color-scheme: dark) {
        border: 2px solid ${COLOR.WARNING};
      }
    `}
`
