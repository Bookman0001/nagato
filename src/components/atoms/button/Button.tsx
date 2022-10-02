import React, { ButtonHTMLAttributes, MouseEvent } from 'react'
import styled from 'styled-components'

import { borderRadius, color, fontSize } from 'src/theme/constants'
import type { ButtonBgColor } from 'src/types/theme'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  bgColor?: ButtonBgColor
  onClick?: () => void
}

export function Button({
  children,
  bgColor = color.BLACK,
  onClick,
  ...props
}: Props) {
  const handleClick = (e: MouseEvent) => {
    if (onClick) {
      e.stopPropagation()
      e.preventDefault()
      onClick()
    }
  }
  return (
    <ButtonItem onClick={handleClick} bgColor={bgColor} {...props}>
      {children}
    </ButtonItem>
  )
}

const ButtonItem = styled.button<{ bgColor: ButtonBgColor }>`
  min-height: 40px;
  height: 100%;
  border-radius: ${borderRadius.DEFAULT};
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSize.M};
  background-color: ${({ bgColor }) => bgColor};
  border: 2px solid ${color.WHITE};
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  :disabled {
    opacity: 0.7;
  }
`
