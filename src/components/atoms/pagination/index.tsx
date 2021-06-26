import { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

import { COLOR } from '../../../theme/constants'

interface Props {
  totalCount: number
  initialIndex: number
  limit: number
  onClick: (clickedIndex: number) => void
}

export default function Pagination({
  totalCount,
  initialIndex,
  limit,
  onClick,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex)
  const totalPaginationCount = Math.floor(totalCount / limit)
  const onceShowingPaginationLimit = 5
  const onceMovingPagination = 2
  const isEdgeOnOncePagination = !!(
    initialIndex % onceShowingPaginationLimit ===
    0
  )
  const isEdgeOnTotalPagination = initialIndex === totalPaginationCount

  const isInitialOnOncePagination = !!(
    (initialIndex - 1) % onceShowingPaginationLimit ===
    0
  )

  const isInitialOnTotalPagination = initialIndex === 1

  const showingPaginationCount = useCallback(() => {
    // 最初のページネーションの時
    if (totalPaginationCount < onceShowingPaginationLimit) {
      const start = 1
      const end = totalPaginationCount
      return Array.from(Array(end - start + 1), (_, i) => i + start)
    }
    if (isInitialOnOncePagination && isInitialOnOncePagination) {
      const start = 1
      const end = onceShowingPaginationLimit
      return Array.from(Array(end - start + 1), (_, i) => i + start)
    }
    // 続きがある場合でページネーションの最後の番号にいる時
    if (isEdgeOnOncePagination && !isEdgeOnTotalPagination) {
      const start = currentIndex - onceMovingPagination
      const end = currentIndex + onceMovingPagination
      return Array.from(Array(end - start + 1), (_, i) => i + start)
    }
    // 続きがない場合でページネーションの最後の番号にいる時
    if (isEdgeOnOncePagination && isEdgeOnTotalPagination) {
      const start = currentIndex - (onceShowingPaginationLimit - 1)
      const end = currentIndex
      return Array.from(Array(end - start + 1), (_, i) => i + start)
    }
    // 現在のページネーションの先頭で前のページネーションに戻れる時
    if (isInitialOnOncePagination && !isInitialOnTotalPagination) {
      const start = currentIndex - onceMovingPagination
      const end = currentIndex + onceMovingPagination
      return Array.from(Array(end - start + 1), (_, i) => i + start)
    }
    const start = currentIndex - 1
    const end =
      currentIndex + (onceShowingPaginationLimit - onceMovingPagination)
    return Array.from(Array(end - start + 1), (_, i) => i + start)
  }, [
    currentIndex,
    totalPaginationCount,
    isEdgeOnOncePagination,
    isInitialOnOncePagination,
    isInitialOnTotalPagination,
    isEdgeOnTotalPagination,
  ])

  const handleClick = (clickedIndex: number) => {
    setCurrentIndex(clickedIndex)
    onClick(clickedIndex)
  }

  return (
    <Container>
      {showingPaginationCount().map((count, index) => {
        return (
          <ButtonWrapper key={index} hasSolidBorder={currentIndex === count}>
            <ButtonItem onClick={() => handleClick(count)} key={index}>
              {count}
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
