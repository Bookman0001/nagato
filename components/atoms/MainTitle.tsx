import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export default function MainTitle({ children }: Props) {
  return (
    <TitleContainer>
      <>{children}</>
    </TitleContainer>
  )
}

const TitleContainer = styled.h1`
  font-size: 32px;
  span {
    font-size: 64px;
  }
`
