import React from 'react'
import styled from 'styled-components'

import { COLOR } from 'src/theme/constants'

interface Props {
  defaultValue: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
}

export default function SearchInput({
  defaultValue,
  placeholder,
  onChange,
  onKeyDown = () => null,
}: Props) {
  return (
    <StyledInput
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
  height: 2.5rem;
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
