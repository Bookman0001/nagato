import styled from 'styled-components'

import { MainTitle } from 'src/components/atoms/mainTitle'

export function Introduction() {
  return (
    <Section>
      <TitleContainer>
        <MainTitle>My Blog</MainTitle>
      </TitleContainer>
    </Section>
  )
}

const Section = styled.section``

const TitleContainer = styled.div`
  h1 {
    align-items: baseline;
  }
`
