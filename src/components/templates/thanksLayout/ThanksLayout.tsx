import React from 'react'

import { Default } from 'src/components/organisms/meta/default'
import { Header } from 'src/components/organisms/header'
import { Footer } from 'src/components/organisms/footer'

interface Props {
  children: React.ReactChild
}

export function ThanksLayout({ children }: Props) {
  return (
    <>
      <Default />
      <Header />
      {children}
      <Footer />
    </>
  )
}
