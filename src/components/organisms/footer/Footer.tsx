import Link from 'next/link'
import styled from 'styled-components'

import { Mail } from 'src/components/atoms/icon/mail'
import { ParagraphContent } from 'src/components/atoms/paragraphContent'
import { CirclePicture } from 'src/components/atoms/picture'
import { COLOR } from 'src/theme/constants'
import { pagesPath } from 'src/utils/$path'

export function Footer() {
  return (
    <FooterContainer>
      <ParagraphContent>
        © {new Date().getFullYear().toString()} k-puppeteer.com
      </ParagraphContent>
      <PictureContainer>
        <a
          href="https://github.com/Bookman0001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CirclePicture
            alt={'githubへのリンク'}
            src={'/assets/github.png'}
            width={30}
            height={30}
          />
        </a>
      </PictureContainer>
      <Link href={pagesPath.reception.$url()} passHref>
        <MailContainer>
          <Mail size={30} />
        </MailContainer>
      </Link>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 60px;
  border-top: 1px solid ${COLOR.GRAY};
  text-align: center;
  background-color: ${COLOR.BLACK};
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
