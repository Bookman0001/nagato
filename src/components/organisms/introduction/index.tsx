import styled from 'styled-components'
import { Trans } from 'react-i18next'

import MainTitle from 'src/components/atoms/mainTitle'
import ParagraphContent from 'src/components/atoms/paragraphContent'
import 'src/locale/I18n'

export default function Introduction() {
  return (
    <Section>
      <MainTitle>Introduction</MainTitle>
      <IntroductionWrapper>
        <ParagraphContent>
          <Trans i18nKey={'introduction'} components={[<br key={0} />]} />
        </ParagraphContent>
      </IntroductionWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 100px;
  @media (max-width: 450px) {
    margin-bottom: 50px;
  }
`

const IntroductionWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media (max-width: 450px) {
    display: block;
    text-align: left;
  }
`
