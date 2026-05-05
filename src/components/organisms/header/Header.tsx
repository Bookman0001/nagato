import Link from 'next/link'

import { Header as Icon } from 'src/components/atoms/icon'
import { pagesPath } from 'src/utils/$path'

export function Header() {
  return (
    <div
      className={
        'w-full border-b border-[--color-gray] z-[--z-index-top-most] text-[--font-size-xxs] bg-[--color-black]'
      }
    >
      <div
        className={
          'h-12.5 flex justify-center items-center pc:max-w-150 pc:mx-auto'
        }
      >
        <Link href={pagesPath.$url()} passHref aria-label={'TOPページに戻る'}>
          <div
            className={
              'w-full flex justify-center items-center text-center cursor-pointer hover:opacity-70'
            }
          >
            <Icon />
          </div>
        </Link>
      </div>
    </div>
  )
}
