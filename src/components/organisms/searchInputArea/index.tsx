import { ChangeEvent, useState, KeyboardEvent } from 'react'
import styled from 'styled-components'

import { useSearchParams } from 'src/hooks/searchParams'
import Title from 'src/components/atoms/title'
import SearchInput from 'src/components/atoms/searchInput'
import Button from 'src/components/atoms/button'
import { DEVICE_WIDTH } from 'src/theme/constants'

interface Props {
  defaultSearchWord: string
}

export default function SearchInputArea({ defaultSearchWord }: Props) {
  const { searchArticlesWithKeyword } = useSearchParams()
  const [keyword, setKeyword] = useState<string>(defaultSearchWord)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchArticlesWithKeyword(keyword)
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
          placeholder={'keyword'}
          onChange={handleChange}
          defaultValue={defaultSearchWord}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <Button onClick={handleClick} text={'search'} />
      </DetailWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 100px;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    margin-bottom: 50px;
  }
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
    @media (max-width: ${DEVICE_WIDTH.TABLET}) {
      width: 50px;
    }
  }
`
