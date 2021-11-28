import styled from 'styled-components'
import { Trans } from 'react-i18next'

import MainTitle from 'src/components/atoms/mainTitle'
import ParagraphContent from 'src/components/atoms/paragraphContent'
import 'src/locale/I18n'

export default function Introduction() {
  return (
    <Section>
      <TitleContainer>
        <MainTitle>Introduction</MainTitle>
      </TitleContainer>
      <IntroductionWrapper>
        <ParagraphContent>
          <Trans i18nKey={'introduction'} components={[<br key={0} />]} />
        </ParagraphContent>
      </IntroductionWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 8rem;
`

const TitleContainer = styled.div`
  h1 {
    align-items: baseline;
  }
`

const IntroductionWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 1rem;
`
