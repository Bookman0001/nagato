import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

import Title from 'src/components/atoms/title'
import CirclePicture from 'src/components/atoms/picture'
import ParagraphContent from 'src/components/atoms/paragraphContent'
import 'src/locale/I18n'

export default function Oss() {
  const { t } = useTranslation()
  return (
    <Section>
      <Title>
        <span>O</span>ss
      </Title>
      <DetailWrapper>
        <ImageWrapper>
          <CirclePicture src="/assets/github.png" alt="github" isCircle />
        </ImageWrapper>
        <ParagraphContent>
          {t('oss')}
          <br />
          <Link href="https://github.com/covid19india/covid19india-react">
            ・covid19india-react
          </Link>
        </ParagraphContent>
      </DetailWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 50px;
  ${media.lessThan('small')`
margin-bottom: 30px;
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
