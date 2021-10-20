import React from 'react'

import MetaTag from 'src/components/organisms/meta/posts'
import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'

interface Props {
  children: React.ReactChild
}

export default function SearchLayout({ children }: Props) {
  return (
    <>
      <MetaTag />
      <Header hideLangSwitch />
      {children}
      <Footer />
    </>
  )
}
