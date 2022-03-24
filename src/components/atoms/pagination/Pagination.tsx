import styled, { css } from 'styled-components'

import { usePagination } from './usePagination'

import { BORDER_RADIUS, COLOR, FONT_SIZE } from 'src/theme/constants'

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

  if (!totalCount) return null

  const displayPaginations = getDisplayPaginations()

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
        color: ${COLOR.BLACK};
        background-color: ${COLOR.WHITE};
        border: 3px solid ${COLOR.WHITE};
      }
    `}
`

const ButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.BLACK};
  border: 2px solid ${COLOR.WHITE};
  border-radius: ${BORDER_RADIUS.DEFAULT};
  width: 45px;
  height: 45px;
  margin: 0 1rem;
  font-size: ${FONT_SIZE.S};
  cursor: pointer;
  text-align: center;
`
