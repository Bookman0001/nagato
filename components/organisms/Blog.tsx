import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

import { Blogs } from 'types'
import Title from '../atoms/Title'
import Description from '../atoms/ParagraphContent'

export default function Blog({ posts }: Blogs) {
  if (!posts.length) return null

  return (
    <Section>
      <Title>
        <span>B</span>log
      </Title>
      <DetailWrapper>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <Link href={`/posts/${post.slug}`}>
                <StyledLink>
                  <SubTitle key={index}>{post.title}</SubTitle>
                  <DescriptionWrapper>
                    <Description>{post.description}</Description>
                  </DescriptionWrapper>
                  <PublishedWrapper>
                    <Description>{post.published}</Description>
                  </PublishedWrapper>
                </StyledLink>
              </Link>
            </div>
          )
        })}
      </DetailWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 150px;
  ${media.lessThan('small')`
  margin-bottom: 100px;
  `}
`

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  ${media.lessThan('small')`
    display: block;
  `}
`

const StyledLink = styled.span`
  cursor: pointer;
  display: block;
  margin: 10px;
  padding: 20px;
  border-radius: 25px;
  border: 1px solid #303030;
  ${media.lessThan('small')`
    width: calc(100% - 60px);
    margin-bottom: 20px;
  `}
`

const DescriptionWrapper = styled.div`
  p {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.5;
  }
`

const PublishedWrapper = styled.div`
  p {
    text-align: right;
    padding-right: 20px;
  }
`

const SubTitle = styled.h3`
  font-size: 20px;
`
