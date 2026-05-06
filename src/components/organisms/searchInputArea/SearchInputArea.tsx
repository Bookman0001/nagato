import { ChangeEvent, useState, KeyboardEvent, useRef } from 'react'

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
    <section className={'pb-8'}>
      <div className={'pb-8'}>
        <Title>Articles Search</Title>
      </div>
      <div className={'flex justify-center items-center m-0 h-12'}>
        <Input
          ref={inputRef}
          placeholder={'keyword'}
          onChange={handleChange}
          defaultValue={defaultKeyword}
          onKeyDown={handleKeyDown}
        />
        <div className={'ml-5'}>
          <Button aria-label="検索" onClick={handleClick}>
            <Search size={20} />
          </Button>
        </div>
      </div>
    </section>
  )
}
