import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Title from 'src/components/atoms/title'
import SearchInput from 'src/components/atoms/searchInput'
import Button from 'src/components/atoms/button'

export default function Search() {
  const router = useRouter()
  const [keyword, setKeyword] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleClick = () => {
    router.push({ pathname: '/posts', query: { keyword: keyword } })
  }

  return (
    <Section>
      <Title>Articles</Title>
      <DetailWrapper>
        <SearchInput placeholder={'search articles'} onChange={handleChange} />
        <Button onClick={handleClick} text={'search'} />
      </DetailWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 100px;
`

const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  button {
    margin-left: 20px;
    height: 40px;
    font-size: 20px;
  }
`
