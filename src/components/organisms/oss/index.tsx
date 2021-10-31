import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import CirclePicture from 'src/components/atoms/picture'
import ParagraphContent from 'src/components/atoms/paragraphContent'
import { DEVICE_WIDTH } from 'src/theme/constants'
import 'src/locale/I18n'

export default function Oss() {
  const { t } = useTranslation()
  return (
    <Section>
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
      <ImageWrapper>
        <a
          href="https://github.com/Bookman0001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CirclePicture
            src="/assets/github.png"
            alt="github"
            width={100}
            height={100}
          />
        </a>
      </ImageWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 250px;
  font-size: 1.25rem;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    margin-bottom: 150px;
  }
`

const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  p {
    margin: 20px 0;
  }
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    display: block;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  a {
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`
