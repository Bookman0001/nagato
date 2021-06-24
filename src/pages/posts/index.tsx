import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useSearchedArticles } from 'src/hooks/search/articles'
import Title from 'src/components/atoms/title'
import ArticleContent from 'src/components/molecures/articleContent'
import { SearchParams } from 'src/types'

export default function Posts() {
  const router = useRouter()
  const { keyword } = router.query
  const params: SearchParams = { searchWord: keyword }
  const { articles, error, isLoading } = useSearchedArticles(params)

  if (isLoading) return <>now loading</>

  if (error) return <>error happened!</>

  return (
    <Section>
      <Title>Articles</Title>
      <DetailWrapper>
        <DetailWrapper>
          {articles?.contents.map((article) => {
            return (
              <div key={article.id}>
                <ArticleContent article={article} />
              </div>
            )
          })}
        </DetailWrapper>
      </DetailWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 100px;
`

const DetailWrapper = styled.div`
  margin: 0;
`
