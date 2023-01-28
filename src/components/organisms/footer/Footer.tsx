import Link from 'next/link'
import styled from 'styled-components'

import { Mail } from 'src/components/atoms/icon'
import { ParagraphContent } from 'src/components/atoms/paragraphContent'
import { CirclePicture } from 'src/components/atoms/picture'
import { color } from 'src/theme/constants'
import { pagesPath, staticPath } from 'src/utils/$path'

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
            src={staticPath.assets.github_png}
            width={30}
            height={30}
          />
        </a>
      </PictureContainer>
      <Link
        href={pagesPath.reception.$url()}
        passHref
        aria-label={'問い合わせページに進む'}
      >
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
  border-top: 1px solid ${color.GRAY};
  text-align: center;
  background-color: ${color.BLACK};
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
