import React, { ButtonHTMLAttributes, MouseEvent } from 'react'
import styled from 'styled-components'

import { COLOR } from '../../../theme/constants'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

export default function Button({ disabled, children, onClick }: Props) {
  const handleClick = (e: MouseEvent) => {
    if (onClick) {
      e.stopPropagation()
      e.preventDefault()
      onClick()
    }
  }
  return (
    <ButtonItem onClick={handleClick} disabled={disabled}>
      {children}
    </ButtonItem>
  )
}

const ButtonItem = styled.button<{ width?: string }>`
  min-height: 40px;
  height: 100%;
  background-color: ${COLOR.WHITE};
  border: 2px solid ${COLOR.BLACK};
  border-radius: 8px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  :disabled {
    opacity: 0.7;
  }
  @media (prefers-color-scheme: dark) {
    background-color: ${COLOR.BLACK};
    border: 2px solid ${COLOR.WHITE};
    color: ${COLOR.WHITE};
  }
`
