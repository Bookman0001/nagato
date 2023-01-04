import { ChangeEvent, useState, KeyboardEvent, useRef } from 'react'
import styled from 'styled-components'

import { Button } from 'src/components/atoms/button'
import { Input } from 'src/components/atoms/form'
import { Search } from 'src/components/atoms/icon'
import { Title } from 'src/components/atoms/title'
import { useSearchParams } from 'src/hooks/router/useSearchParams'

interface Props {
  defaultKeyword: string
}

export function SearchInputArea({ defaultKeyword }: Props) {
  const { searchArticlesWithKeyword } = useSearchParams()
  const [keyword, setKeyword] = useState<string>(defaultKeyword)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
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
        <Input
          ref={inputRef}
          placeholder={'keyword'}
          onChange={handleChange}
          defaultValue={defaultKeyword}
          onKeyDown={handleKeyDown}
        />
        <Button aria-label="検索" onClick={handleClick}>
          <Search size={26} />
        </Button>
      </DetailWrapper>
    </Section>
  )
}

const Section = styled.section`
  padding-bottom: 4rem;
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
