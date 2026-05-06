import React from 'react'

import { MainTitle } from 'src/components/atoms/mainTitle'
import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'

interface Props {
  children: React.ReactNode
}

export function ErrorLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div
        className={
          'tablet:max-w-180 phone:max-w-140 max-w-80 text-lg my-16 mx-auto p-4'
        }
      >
        <div className={'pb-8'}>
          <MainTitle>{children}</MainTitle>
        </div>
      </div>
      <Footer />
    </>
  )
}
