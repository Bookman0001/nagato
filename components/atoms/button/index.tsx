import styled from 'styled-components'

interface Props {
  text?: string
  onClick: () => void
}

export default function Button({ text, onClick }: Props) {
  return <ButtonItem onClick={onClick}>{text}</ButtonItem>
}

const ButtonItem = styled.button`
  background-color: #ffffff;
  border: 2px solid #303030;
  padding: 5px 3rem;
  display: block;
  margin: 0 auto;
  font-size: 32px;
  cursor: pointer;
`
