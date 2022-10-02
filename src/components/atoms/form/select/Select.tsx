import React, { SelectHTMLAttributes } from 'react'
import styled from 'styled-components'

import { borderRadius, color } from 'src/theme/constants'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactChild
}

export function Select({
  onChange = () => null,
  defaultValue = '',
  ...props
}: Props) {
  return (
    <Container>
      <StyledSelect defaultValue={defaultValue} onChange={onChange} {...props}>
        <>{props.children}</>
      </StyledSelect>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  border: 1px solid ${color.BLACK};
  border-radius: ${borderRadius.DEFAULT};
  background: ${color.WHITE};
  line-height: 1.5;
  &::before {
    position: absolute;
    top: 0.6em;
    right: 0.6em;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${color.BLACK};
    pointer-events: none;
  }
`

const StyledSelect = styled.select`
  color: ${color.BLACK};
  width: 100%;
  height: 100%;
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
