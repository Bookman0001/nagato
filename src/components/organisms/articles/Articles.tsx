import { Button } from 'src/components/atoms/button'
import { ArticleContent } from 'src/components/molecures/articleContent'
import { useTransitionPage } from 'src/hooks/router/useTransitionPage'
import type { ArticlesPagination } from 'src/types'

interface Props {
  articles: ArticlesPagination
}

export function Articles({ articles }: Props) {
  const { transitionToSearch } = useTransitionPage()
  const { contents } = articles

  if (!contents.length) return null

  const handleClick = () => {
    transitionToSearch()
  }

  return (
    <section className={'mb-8'}>
      <div className={'m-0'}>
        {contents.map((article) => {
          return (
            <div key={article.id} className={'pb-8 last:pb-0"'}>
              <ArticleContent article={article} />
            </div>
          )
        })}
      </div>
      <div className={'flex justify-center'}>
        <Button onClick={handleClick}>See More</Button>
      </div>
    </section>
  )
}
