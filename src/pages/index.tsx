import { GetStaticProps } from 'next'

import { Articles } from 'src/components/organisms/articles'
import { Introduction } from 'src/components/organisms/introduction'
import { TopLayout } from 'src/components/templates/topLayout'
import { articlesController } from 'src/controllers/articles'
import type { ArticlesPagination } from 'src/types'

interface Props {
  articles: ArticlesPagination
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { getLimitedArticles } = articlesController()
  const articles = await getLimitedArticles({ limit: 5 })
  return {
    props: {
      articles,
    },
  }
}

export default function Home({ articles }: Props) {
  return (
    <TopLayout>
      <main className={'m-auto tablet:max-w-180 phone:max-w-140 max-w-100'}>
        <Introduction />
        <Articles articles={articles} />
      </main>
    </TopLayout>
  )
}
