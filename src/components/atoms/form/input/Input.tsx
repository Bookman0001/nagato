import React, { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { borderRadius, color, fontSize } from 'src/theme/constants'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  type?: 'email' | 'text'
}

export const Input = React.forwardRef<HTMLInputElement, Props>(function Element(
  { hasError = false, type = 'text', ...props }: Props,
  ref
) {
  return (
    <StyledInput
      {...props}
      type={type}
      role={'textbox'}
      ref={ref}
      $hasError={hasError}
    />
  )
})

const StyledInput = styled.input<{ $hasError: boolean }>`
  width: 100%;
  flex: 1;
  height: 100%;
  height: 40px;
  font-size: ${fontSize.S};
  text-indent: 5px;
  background-color: ${color.BLACK};
  border: 1px solid ${color.WHITE};
  border-radius: ${borderRadius.DEFAULT};
  ${({ $hasError }) =>
    $hasError &&
    css`
      border: 2px solid ${color.WARNING};
    `}
`
