import styled from 'styled-components'
import media from 'styled-media-query'

import Title from '../atoms/Title'

type Props = {
  title: string
  children: React.ReactChild
}

export default function BlogLayout({ title, children }: Props) {
  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}

const Container = styled.div``

const TitleWrapper = styled.div`
  margin-bottom: 50px;
`

const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  line-height: 1.5;
  ${media.lessThan('medium')`
    display: block;
  `}
`
