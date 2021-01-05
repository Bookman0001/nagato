import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'
import dynamic from 'next/dynamic'

import 'locale/I18n'

const Title = dynamic(() => import('components/atoms/Title'))
const CirclePicture = dynamic(() => import('components/atoms/Picture'))
const ParagraphContent = dynamic(
  () => import('components/atoms/ParagraphContent')
)

export default function EnginnerCareer() {
  const { t } = useTranslation()
  return (
    <Section>
      <Title>
        <span>C</span>areer
      </Title>
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
  margin-bottom: 150px;
  ${media.lessThan('medium')`
  margin-bottom: 100px;
  `}
`

const DetailWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  border-radius: 10px;
  ${media.lessThan('small')`
    display: block;
  `}
  p {
    margin: 20px 0;
  }
`

const ImageWrapper = styled.div`
  margin-right: 50px;
`
