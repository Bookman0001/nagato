import { MouseEvent } from 'react'
import styled from 'styled-components'

import { COLOR } from '../../../theme/constants'

interface Props {
  text?: string
  onClick: () => void
}

export default function Button({ text, onClick }: Props) {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    onClick()
  }
  return <ButtonItem onClick={handleClick}>{text}</ButtonItem>
}

const ButtonItem = styled.button`
  background-color: ${COLOR.WHITE};
  border: 2px solid ${COLOR.BLACK};
  border-radius: 8px;
  padding: 5px 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
`
