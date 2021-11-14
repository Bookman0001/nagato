import React, { InputHTMLAttributes, RefObject } from 'react'
import styled from 'styled-components'

import { COLOR } from 'src/theme/constants'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: RefObject<HTMLInputElement> | null
}

export default function SearchInput({
  inputRef = null,
  defaultValue,
  placeholder,
  onChange,
  onKeyDown = () => null,
}: Props) {
  return (
    <StyledInput
      ref={inputRef}
      type={'text'}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

const StyledInput = styled.input`
  width: 100%;
  flex: 1;
  height: 100%;
  font-size: 1.25rem;
  text-indent: 10px;
  border: 1px solid ${COLOR.BLACK};
  border-radius: 8px;
  background-color: #ffffff;
  @media (prefers-color-scheme: dark) {
    background-color: ${COLOR.BLACK};
    color: ${COLOR.WHITE};
    border: 1px solid ${COLOR.WHITE};
  }
`
