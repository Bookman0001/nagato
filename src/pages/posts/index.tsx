import { SearchInputArea } from 'src/components/organisms/searchInputArea'
import { Articles, Skeletons } from 'src/components/organisms/searchedArticles'
import { SearchLayout } from 'src/components/templates/searchLayout'
import { useSearchedArticles } from 'src/hooks/articles/useSearchedArticles'
import { useSearchParams } from 'src/hooks/router/useSearchParams'

export type OptionalQuery = {
  keyword?: string
  page?: string
}

export default function Posts() {
  const { params } = useSearchParams()
  const { articles } = useSearchedArticles(params)

  if (!articles) {
    return (
      <SearchLayout>
        <section
          className={
            'mx-auto tablet:max-w-180 phone:max-w-140 max-w-80 min-h-[calc(100vh-110px)] pt-8 pb-0 px-0'
          }
        >
          <div>
            <SearchInputArea defaultKeyword={params.keyword} />
          </div>
          <Skeletons itemCount={10} />
        </section>
      </SearchLayout>
    )
  }

  return (
    <SearchLayout>
      <section
        className={
          'mx-auto tablet:max-w-180 phone:max-w-140 max-w-80 min-h-[calc(100vh-110px)] pt-8 pb-0 px-0'
        }
      >
        <div>
          <SearchInputArea defaultKeyword={params.keyword} />
        </div>
        <Articles currentIndex={Number(params.page) || 1} articles={articles} />
      </section>
    </SearchLayout>
  )
}
