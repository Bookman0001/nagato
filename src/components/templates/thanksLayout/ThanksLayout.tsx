import React from 'react'

import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'
import { Default } from 'src/components/organisms/meta/default'

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
