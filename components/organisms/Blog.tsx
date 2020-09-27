import styled from 'styled-components'
import media from 'styled-media-query'

import { Blogs } from 'types'
import Title from '../atoms/Title'

export default function Blog({ posts }: Blogs) {
  if (!posts.length) return null

  return (
    <Container>
      <Title>
        <span>B</span>log
      </Title>
      <DetailWrapper>
        {posts.map((post, index) => {
          return (
            <BlogWrapper key={index}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              <div>{post.published}</div>
            </BlogWrapper>
          )
        })}
      </DetailWrapper>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 100px;
`

const DetailWrapper = styled.div`
  margin-top: 10px;
  padding: 20px 0;
  display: block;
  align-items: center;
  border-radius: 10px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  p {
    padding: 20px 0;
  }
`

const BlogWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`

const Link = styled.a`
  display: block;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: #0099ff;
  ${media.lessThan('medium')`
    font-size: 1rem;
  `}
`
