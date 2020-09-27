import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'

import Title from '../atoms/Title'
import CirclePicture from '../atoms/Picture'
import ParagraphContent from '../atoms/ParagraphContent'
import 'locale/I18n'

export default function Oss() {
  const { t } = useTranslation()
  return (
    <Container>
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
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 100px;
`

const DetailWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ;
  ${media.lessThan('medium')`
    display: block;
  `}
  p {
    margin: 20px 0;
  }
`

const ImageWrapper = styled.div`
  margin-right: 50px;
`

const Link = styled.a``
