import { useState } from 'react'
import styled, { css } from 'styled-components'

import { COLOR } from '../../../theme/constants'

interface Props {
  totalCount: number
  limit: number
  onClick: (clickedIndex: number) => void
}

export default function Pagination({ totalCount, limit, onClick }: Props) {
  const [currentClikedIndex, setCurrentIndex] = useState<number>(1)
  const paginationCount = Math.floor(totalCount / limit)

  const handleClick = (clickedIndex: number) => {
    setCurrentIndex(clickedIndex)
    onClick(clickedIndex)
  }

  return (
    <Container>
      {[...Array(paginationCount)].map((_, index) => {
        return (
          <ButtonWrapper
            key={index}
            hasSolidBorder={currentClikedIndex === index + 1}
          >
            <ButtonItem onClick={() => handleClick(index + 1)} key={index}>
              {index + 1}
            </ButtonItem>
          </ButtonWrapper>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled.div<{ hasSolidBorder: boolean }>`
  button {
    border: 1px solid ${COLOR.BLACK};
  }
  ${(props) =>
    props.hasSolidBorder &&
    css`
      button {
        border: 2px solid ${COLOR.BLACK};
      }
    `}
`

const ButtonItem = styled.button`
  display: block;
  background-color: ${COLOR.WHITE};
  border-radius: 10%;
  width: 30px;
  height: 30px;
  margin: 0 1rem;
  border: none;
  font-size: 10px;
  cursor: pointer;
  text-align: center;
`
