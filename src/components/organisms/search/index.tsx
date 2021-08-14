import { ChangeEvent, useState, KeyboardEvent } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Title from 'src/components/atoms/title'
import SearchInput from 'src/components/atoms/searchInput'
import Button from 'src/components/atoms/button'

interface Props {
  defaultSearchWord: string
}

export default function Search({ defaultSearchWord }: Props) {
  const router = useRouter()
  const [keyword, setKeyword] = useState<string>(defaultSearchWord)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      router.push({ pathname: '/posts', query: { keyword: keyword } })
    }
  }

  const handleClick = () => {
    router.push({ pathname: '/posts', query: { keyword: keyword } })
  }

  return (
    <Section>
      <Title>Articles Search</Title>
      <DetailWrapper>
        <SearchInput
          placeholder={'keyword'}
          onChange={handleChange}
          defaultValue={defaultSearchWord}
          onKeyPress={(e) => handleKeyPress(e)}
        />
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
    display: flex;
    justify-content: center;
    margin-left: 20px;
    height: 40px;
    font-size: 1.25rem;
    @media (max-width: 768px) {
      width: 50px;
    }
  }
`
