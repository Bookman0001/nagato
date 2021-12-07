import Link from 'next/link'
import styled from 'styled-components'

import Description from 'src/components/atoms/paragraphContent'
import CirclePicture from 'src/components/atoms/picture'
import MailIcon from 'src/components/atoms/icon/mail'
import { COLOR } from 'src/theme/constants'

export default function Footer() {
  return (
    <FooterContainer>
      <Description>
        © {new Date().getFullYear().toString()} k-puppeteer.com
      </Description>
      <PictureContainer>
        <a
          href="https://github.com/Bookman0001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CirclePicture
            alt={'guthub'}
            src={'/assets/github.png'}
            width={30}
            height={30}
          />
        </a>
      </PictureContainer>
      <Link href={'/reception'}>
        <MailContainer>
          <MailIcon size={30} />
        </MailContainer>
      </Link>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 60px;
  background-color: ${COLOR.WHITE};
  border-top: 1px solid ${COLOR.GRAY};
  text-align: center;
  @media (prefers-color-scheme: dark) {
    background-color: ${COLOR.BLACK};
    color: ${COLOR.WHITE};
  }
`

const PictureContainer = styled.div`
  margin-left: 1rem;
`

const MailContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 1rem;
  cursor: pointer;
`
