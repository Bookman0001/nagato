import styled from 'styled-components'

import { COLOR } from 'theme/constants'

interface Props {
  text?: string
  onClick: () => void
}

export default function Button({ text, onClick }: Props) {
  return <ButtonItem onClick={onClick}>{text}</ButtonItem>
}

const ButtonItem = styled.button`
  background-color: ${COLOR.WHITE};
  border: 2px solid ${COLOR.BLACK};
  padding: 5px 3rem;
  display: block;
  margin: 0 auto;
  font-size: 32px;
  cursor: pointer;
`
