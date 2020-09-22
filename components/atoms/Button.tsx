import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  onClick: () => void
}

export default function Button({ children, onClick }: Props) {
  return (
    <ButtonItem onClick={onClick}>
      <>{children}</>
    </ButtonItem>
  )
}

const ButtonItem = styled.button`
  background-color: #ffffff;
  border-radius: 10px;
  border: 2px solid #303030;
  padding: 5px 3rem;
  display: block;
  margin: 0 auto;
  font-size: 32px;
  cursor: pointer;
`
