import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'

import Title from 'src/components/atoms/title'
import CirclePicture from 'src/components/atoms/picture'
import ParagraphContent from 'src/components/atoms/paragraphContent'
import 'src/locale/I18n'

export default function EnginnerCareer() {
  const { t } = useTranslation()
  return (
    <Section>
      <Title>Career</Title>
      <DetailWrapper>
        <ImageWrapper>
          <CirclePicture src="/assets/hospital.png" alt="hospital" isCircle />
        </ImageWrapper>
        <ParagraphContent>{t('step1')}</ParagraphContent>
      </DetailWrapper>
      <DetailWrapper>
        <ImageWrapper>
          <CirclePicture src="/assets/net.png" alt="net" isCircle />
        </ImageWrapper>
        <ParagraphContent>
          {t('step2')}
          <br />
          {t('column21')}
          <br />
          {t('column22')}
          <br />
          {t('column23')}
        </ParagraphContent>
      </DetailWrapper>
      <DetailWrapper>
        <ImageWrapper>
          <CirclePicture src="/assets/frontend.png" alt="frontend" isCircle />
        </ImageWrapper>
        <ParagraphContent>
          {t('now')}
          <br />
          {t('column31')}
        </ParagraphContent>
      </DetailWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 100px;
  ${media.lessThan('small')`
    margin-bottom: 50px;
  `}
`

const DetailWrapper = styled.div`
  p {
    text-align: center;
    margin: 70px 0;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`
