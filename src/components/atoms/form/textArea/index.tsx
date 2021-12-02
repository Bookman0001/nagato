import React, { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { COLOR } from 'src/theme/constants'

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  labelEl?: React.ReactChild
  rows?: number
  hasError?: boolean
}

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  (props: Props, ref) => {
    return (
      <>
        {props.labelEl && <Label>{props.labelEl}</Label>}
        <StyledTextArea
          ref={ref}
          hasError={props.hasError || false}
          rows={props.rows || 6}
          {...props}
        />
      </>
    )
  }
)

TextArea.displayName = 'TextArea'

export default TextArea

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding-bottom: 1rem;
  font-weight: bold;
`

const StyledTextArea = styled.textarea<{ hasError: boolean }>`
  flex: 1;
  width: calc(100% - 20px);
  font-size: 1.25rem;
  padding: 10px;
  border: 1px solid ${COLOR.BLACK};
  border-radius: 8px;
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
