import Link from 'next/link'

import { Mail } from 'src/components/atoms/icon'
import { ParagraphContent } from 'src/components/atoms/paragraphContent'
import { CirclePicture } from 'src/components/atoms/picture'
import { pagesPath, staticPath } from 'src/utils/$path'

export function Footer() {
  return (
    <footer
      className={
        'flex justify-center items-center flex-1 w-full h-15 border-t border-[--color-gray] text-center bg-[--color-black]'
      }
    >
      <ParagraphContent>
        © {new Date().getFullYear().toString()} k-puppeteer.com
      </ParagraphContent>
      <div className={'ml-4'}>
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
      </div>
      <Link
        href={pagesPath.reception.$url()}
        passHref
        aria-label={'問い合わせページに進む'}
      >
        <div className={'flex justify-center ml-4 cursor-pointer'}>
          <Mail size={30} />
        </div>
      </Link>
    </footer>
  )
}
