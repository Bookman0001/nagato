import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'

import Title from '../atoms/Title'
import ParagraphContent from '../atoms/ParagraphContent'
import 'locale/I18n'

export default function Introduction() {
  const { t } = useTranslation()
  return (
    <>
      <Title>
        <span>I</span>ntroduction
      </Title>
      <IntroductionWrapper>
        <ParagraphContent>{t('introduction')}</ParagraphContent>
      </IntroductionWrapper>
    </>
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

const IntroductionWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  animation: ${Animation} 0.5s linear;
  ${media.lessThan('medium')`
    display: block;
  `}
`
