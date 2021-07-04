import React from 'react'
import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'

interface Props {
  children: React.ReactChild
}

export default function SearchedLayout({ children }: Props) {
  return (
    <>
      <Header hideLangSwitch />
      {children}
      <Footer />
    </>
  )
}
