import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import 'locale/I18n'

const Title = dynamic(() => import('components/atoms/Title'))
const CirclePicture = dynamic(() => import('components/atoms/Picture'))
const ParagraphContent = dynamic(
  () => import('components/atoms/ParagraphContent')
)

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
