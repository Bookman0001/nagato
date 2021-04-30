import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'

import MainTitle from 'src/components/atoms/mainTitle'
import ParagraphContent from 'src/components/atoms/paragraphContent'
import 'src/locale/I18n'

export default function Introduction() {
  const { t } = useTranslation()
  return (
    <Section>
      <MainTitle>
        <span>I</span>ntroduction
      </MainTitle>
      <IntroductionWrapper>
        <ParagraphContent>{t('introduction')}</ParagraphContent>
      </IntroductionWrapper>
    </Section>
  )
}

const Animation = keyframes`
0% {
  margin: 0;
  opacity: 0.1;
}
100% {
  margin: 10px 0;
  opacity: 1;
}
`

const Section = styled.section`
  margin-bottom: 50px;
  ${media.lessThan('small')`
    margin-bottom: 30px;
  `}
`

const IntroductionWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  animation: ${Animation} 0.5s linear;
  ${media.lessThan('medium')`
    display: block;
  `}
`
