import React, { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { borderRadius, color, fontSize } from 'src/theme/constants'

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  rows?: number
  hasError?: boolean
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  function Element({ rows = 6, hasError = false, ...props }: Props, ref) {
    return (
      <StyledTextArea
        {...props}
        role={'textbox'}
        ref={ref}
        rows={rows}
        hasError={hasError}
      />
    )
  }
)

const StyledTextArea = styled.textarea<{ hasError: boolean }>`
  flex: 1;
  width: calc(100% - 20px);
  font-size: ${fontSize.S};
  padding: 10px;
  background-color: ${color.BLACK};
  border: 1px solid ${color.WHITE};
  border-radius: ${borderRadius.DEFAULT};
  ${({ hasError }) =>
    hasError &&
    css`
      border: 2px solid ${color.WARNING};
    `}
`
