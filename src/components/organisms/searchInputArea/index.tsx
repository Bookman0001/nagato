import { ChangeEvent, useState, KeyboardEvent, useRef } from 'react'
import styled from 'styled-components'

import { useSearchParams } from 'src/hooks/searchParams'
import Title from 'src/components/atoms/title'
import SearchInput from 'src/components/atoms/searchInput'
import Button from 'src/components/atoms/button'
import SearchIcon from 'src/components/atoms/searchIcon'

interface Props {
  defaultKeyword: string
}

export default function SearchInputArea({ defaultKeyword }: Props) {
  const { searchArticlesWithKeyword } = useSearchParams()
  const [keyword, setKeyword] = useState<string>(defaultKeyword)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchArticlesWithKeyword(keyword)
      inputRef.current?.blur()
    }
  }

  const handleClick = () => {
    searchArticlesWithKeyword(keyword)
  }

  return (
    <Section>
      <Title>Articles Search</Title>
      <DetailWrapper>
        <SearchInput
          inputRef={inputRef}
          placeholder={'keyword'}
          onChange={handleChange}
          defaultValue={defaultKeyword}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleClick}>
          <SearchIcon size={26} />
        </Button>
      </DetailWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 4rem;
`

const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 3rem;
  button {
    margin-left: 20px;
  }
`
