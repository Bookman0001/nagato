import React from 'react'

import { Button } from 'src/components/atoms/button'
import { MainTitle } from 'src/components/atoms/mainTitle'
import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'
import { Post } from 'src/components/organisms/meta/post'
import { useTransitionPage } from 'src/hooks/router/useTransitionPage'
import type { Article } from 'src/types'

interface Props {
  article: Article
  children: React.ReactNode
}

export function BlogLayout({ article, children }: Props) {
  const { transitionToTop } = useTransitionPage()

  return (
    <>
      <Post article={article} />
      <Header />
      <div
        className={
          'tablet:max-w-180 phone:max-w-140 max-w-80 mx-auto my-12 text-s'
        }
      >
        <div className={'pb-8'}>
          <MainTitle>{article.title}</MainTitle>
        </div>
        <main className={'flex items-center leading-loose mb-8'}>
          <div className={'blog-markdown'}>{children}</div>
        </main>
        <div className={'min-w-full flex justify-center items-center'}>
          <Button onClick={transitionToTop}>Back To Top</Button>
        </div>
      </div>
      <Footer />
    </>
  )
}
