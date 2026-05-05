import React from 'react'

import { Rectangle } from 'src/components/atoms/icon'
import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'
import { Default } from 'src/components/organisms/meta/default'

interface Props {
  children: React.ReactNode
}

export function TopLayout({ children }: Props) {
  return (
    <>
      <Default />
      <Header />
      <div className="flex justify-center items-center py-8 [&>div]:px-12.5">
        <Rectangle size={180} />
      </div>
      {children}
      <Footer />
    </>
  )
}
