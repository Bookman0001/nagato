import styled, { css } from 'styled-components'

import { BORDER_RADIUS, COLOR, FONT_SIZE } from 'src/theme/constants'

interface Props {
  currentIndex: number
  totalCount: number
  limit: number
  onClick: (clickedIndex: number) => void
}

export default function Pagination({
  currentIndex,
  totalCount,
  limit,
  onClick,
}: Props) {
  const paginationCount = Math.ceil(totalCount / limit)

  const handleClick = (clickedIndex: number) => {
    onClick(clickedIndex)
  }

  return (
    <Container>
      {[...Array(paginationCount)].map((_, index) => {
        return (
          <ButtonWrapper key={index} hasSelected={currentIndex === index + 1}>
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

const ButtonWrapper = styled.div<{ hasSelected: boolean }>`
  ${(props) =>
    props.hasSelected &&
    css`
      button {
        color: ${COLOR.WHITE};
        background-color: ${COLOR.BLACK};
      }
      @media (prefers-color-scheme: dark) {
        button {
          color: ${COLOR.BLACK};
          background-color: ${COLOR.WHITE};
          border: 3px solid ${COLOR.WHITE};
        }
      }
    `}
`

const ButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.WHITE};
  border: 2px solid ${COLOR.BLACK};
  border-radius: ${BORDER_RADIUS.DEFAULT};
  width: 45px;
  height: 45px;
  margin: 0 1rem;
  font-size: ${FONT_SIZE.S};
  cursor: pointer;
  text-align: center;
  @media (prefers-color-scheme: dark) {
    background-color: ${COLOR.BLACK};
    color: ${COLOR.WHITE};
    border: 2px solid ${COLOR.WHITE};
  }
`
