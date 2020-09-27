import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'

import Title from '../atoms/Title'
import ParagraphContent from '../atoms/ParagraphContent'
import 'locale/I18n'

export default function Introduction() {
  const { t } = useTranslation()
  return (
    <Container>
      <Title>
        <span>I</span>ntroduction
      </Title>
      <IntroductionWrapper>
        <ParagraphContent>{t('introduction')}</ParagraphContent>
      </IntroductionWrapper>
    </Container>
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

const Container = styled.div`
  margin-top: calc(100px - 30px);
  margin-bottom: 200px;
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
