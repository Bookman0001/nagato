import React, { ButtonHTMLAttributes, MouseEvent } from 'react'
import styled from 'styled-components'

import type { ButtonBgColor } from 'src/types/theme'

import { BORDER_RADIUS, COLOR, FONT_SIZE } from 'src/theme/constants'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  bgColor?: ButtonBgColor
  onClick?: () => void
}

export function Button({
  children,
  bgColor = COLOR.BLACK,
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
  border-radius: ${BORDER_RADIUS.DEFAULT};
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONT_SIZE.M};
  background-color: ${({ bgColor }) => bgColor};
  border: 2px solid ${COLOR.WHITE};
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  :disabled {
    opacity: 0.7;
  }
`
