import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'
import dynamic from 'next/dynamic'

import 'locale/I18n'

const MainTitle = dynamic(() => import('components/atoms/MainTitle'))
const ParagraphContent = dynamic(
  () => import('components/atoms/ParagraphContent')
)

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
  margin-bottom: 150px;
  ${media.lessThan('medium')`
  margin-bottom: 100px;
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
