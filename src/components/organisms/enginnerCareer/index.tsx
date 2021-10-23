import styled from 'styled-components'
import { useTranslation, Trans } from 'react-i18next'

import Title from 'src/components/atoms/title'
import CirclePicture from 'src/components/atoms/picture'
import ParagraphContent from 'src/components/atoms/paragraphContent'
import { DEVICE_WIDTH } from 'src/theme/constants'
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
        <ParagraphContent>
          <Trans i18nKey={'step1'} components={[<br key={0} />]} />
        </ParagraphContent>
      </DetailWrapper>
      <DetailWrapper>
        <ImageWrapper>
          <CirclePicture src="/assets/net.png" alt="net" isCircle />
        </ImageWrapper>
        <ParagraphContent>
          <Trans i18nKey={'step2'} components={[<br key={0} />]} />
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
          <Trans i18nKey={'now'} components={[<br key={0} />]} />
          <br />
          {t('column31')}
        </ParagraphContent>
      </DetailWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 250px;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    margin-bottom: 150px;
  }
`

const DetailWrapper = styled.div`
  p {
    text-align: center;
    margin: 70px 0;
  }
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    p {
      text-align: left;
    }
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`
