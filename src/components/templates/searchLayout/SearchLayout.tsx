import React from 'react'

import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'
import { Posts } from 'src/components/organisms/meta/posts'

interface Props {
  children: React.ReactChild
}

export function SearchLayout({ children }: Props) {
  return (
    <>
      <Posts />
      <Header />
      {children}
      <Footer />
    </>
  )
}
