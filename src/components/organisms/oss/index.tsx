import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'

import Title from 'src/components/atoms/title'
import CirclePicture from 'src/components/atoms/picture'
import ParagraphContent from 'src/components/atoms/paragraphContent'
import 'src/locale/I18n'

export default function Oss() {
  const { t } = useTranslation()
  return (
    <Section>
      <Title>Oss/GitHub</Title>
      <ImageWrapper>
        <a
          href="https://github.com/Bookman0001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CirclePicture src="/assets/github.png" alt="github" isCircle />
        </a>
      </ImageWrapper>
      <AccountWrapper>
        <a
          href="https://github.com/Bookman0001"
          target="_blank"
          rel="noopener noreferrer"
        >
          MyAccount
        </a>
      </AccountWrapper>
      <DetailWrapper>
        <ParagraphContent>
          {t('oss')}
          <br />
          <a
            href="https://github.com/nuxt/nuxtjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            nuxtjs.org
          </a>
          <br />
          <a
            href="https://github.com/covid19india/covid19india-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            covid19india-react
          </a>
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
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  ${media.lessThan('small')`
    display: block;
  `}
  p {
    margin: 20px 0;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const AccountWrapper = styled.div`
  display: flex;
  justify-content: center;
`
