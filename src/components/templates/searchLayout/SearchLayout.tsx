import React from 'react'

import { Posts } from 'src/components/organisms/meta/posts'
import { Header } from 'src/components/organisms/header'
import { Footer } from 'src/components/organisms/footer'

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
