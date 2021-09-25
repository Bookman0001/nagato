import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'

import MainTitle from 'src/components/atoms/mainTitle'
import ParagraphContent from 'src/components/atoms/paragraphContent'
import { DEVICE_WIDTH } from 'src/theme/constants'
import 'src/locale/I18n'

export default function Introduction() {
  const { t } = useTranslation()
  return (
    <Section>
      <MainTitle>Introduction</MainTitle>
      <IntroductionWrapper>
        <ParagraphContent>
          <Trans i18nKey={t('introduction')} components={[<br key={0} />]} />
        </ParagraphContent>
      </IntroductionWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 100px;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    margin-bottom: 50px;
  }
`

const IntroductionWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`
