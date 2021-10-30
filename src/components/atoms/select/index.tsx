import React from 'react'
import styled from 'styled-components'

import { COLOR } from 'src/theme/constants'

interface Props {
  defaultValue: string
  children: React.ReactChild
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({ defaultValue, children, onChange }: Props) {
  return (
    <Container>
      <StyledSelect defaultValue={defaultValue} onChange={onChange}>
        <>{children}</>
      </StyledSelect>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  border: 1px solid ${COLOR.BLACK};
  border-radius: 2px;
  background: #ffffff;
  line-height: 1.5;
  &::before {
    position: absolute;
    top: 0.9em;
    right: 0.9em;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${COLOR.BLACK};
    pointer-events: none;
  }
`

const StyledSelect = styled.select`
  width: 100%;
  height: 28px;
  padding: 0 1em;
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  background: transparent;
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
`
