import { useMemo } from 'react'
import styled, { css } from 'styled-components'

import { usePagination } from './usePagination'

import { borderRadius, color, fontSize } from 'src/theme/constants'

interface Props {
  currentIndex: number
  totalCount: number
  limit: number
  onClick: (clickedIndex: number) => void
}

export function Pagination({
  currentIndex,
  totalCount,
  limit,
  onClick,
}: Props) {
  const { getDisplayPaginations } = usePagination({
    currentIndex,
    totalCount,
    limit,
  })

  const displayPaginations = useMemo(
    () => getDisplayPaginations(),
    [getDisplayPaginations]
  )

  if (!totalCount) return null

  const handleClick = (clickedIndex: number) => {
    onClick(clickedIndex)
  }

  return (
    <Container>
      {displayPaginations.map((num, index) => {
        return (
          <ButtonWrapper key={index} hasSelected={currentIndex === num}>
            <ButtonItem
              onClick={() => handleClick(num)}
              key={index}
              role={'button'}
            >
              {num}
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

const ButtonWrapper = styled.div<{ hasSelected: boolean }>`
  ${(props) =>
    props.hasSelected &&
    css`
      button {
        color: ${color.BLACK};
        background-color: ${color.WHITE};
        border: 3px solid ${color.WHITE};
      }
    `}
`

const ButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.BLACK};
  border: 2px solid ${color.WHITE};
  border-radius: ${borderRadius.DEFAULT};
  width: 45px;
  height: 45px;
  margin: 0 1rem;
  font-size: ${fontSize.S};
  cursor: pointer;
  text-align: center;
`
