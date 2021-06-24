import React from 'react'
import styled from 'styled-components'

import { COLOR } from 'src/theme/constants'

interface Props {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput({ placeholder, onChange }: Props) {
  return (
    <StyledInput
      type={'search'}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
  text-indent: 10px;
  border: 1px solid ${COLOR.BLACK};
  border-radius: 0.25rem;
  background-color: #ffffff;
`
