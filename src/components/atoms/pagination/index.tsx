import styled, { css } from 'styled-components'

import { COLOR } from '../../../theme/constants'

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
          <ButtonWrapper
            key={index}
            hasSolidBorder={currentIndex === index + 1}
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
        border: 3px solid ${COLOR.BLACK};
      }
    `}
`

const ButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.WHITE};
  border-radius: 10%;
  width: 45px;
  height: 45px;
  margin: 0 1rem;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
`
