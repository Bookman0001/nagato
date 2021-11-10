import styled from 'styled-components'
import { Trans } from 'react-i18next'

import MainTitle from 'src/components/atoms/mainTitle'
import ParagraphContent from 'src/components/atoms/paragraphContent'
import { DEVICE_WIDTH } from 'src/theme/constants'
import 'src/locale/I18n'

export default function Introduction() {
  return (
    <Section>
      <TitleContainer>
        <MainTitle>
          <span>K</span> Atlier
        </MainTitle>
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
  margin-bottom: 250px;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    margin-bottom: 150px;
  }
`

const TitleContainer = styled.div`
  span {
    font-size: 4rem;
    padding-right: 5px;
  }
  h1 {
    align-items: baseline;
  }
`

const IntroductionWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 1.25rem;
`
