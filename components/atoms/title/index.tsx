import styled from 'styled-components'
import media from 'styled-media-query'

interface Props {
  children: React.ReactNode
}

export default function Title({ children }: Props) {
  return (
    <TitleContainer>
      <>{children}</>
    </TitleContainer>
  )
}

const TitleContainer = styled.h2`
  padding-bottom: 30px;
  font-size: 32px;
  span {
    font-size: 64px;
  }
  ${media.lessThan('small')`
    font-size: 20px;
    span {
      font-size: 40px;
    }
  `}
`
