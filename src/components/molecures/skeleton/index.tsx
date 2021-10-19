import styled, { keyframes } from 'styled-components'

import { COLOR, DEVICE_WIDTH } from 'src/theme/constants'

export default function Skeleton() {
  return (
    <Wrapper>
      <SubTitleSkeleton />
      <DateSkeleton>..........</DateSkeleton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    margin: 0;
    width: 100%;
  }
`

const Animation = keyframes`
  0% {
    width: 25vw;
  }
  100% {
    width: 50vw;
  }
`

const SubTitleSkeleton = styled.div`
  animation: 0.4s linear 0.1s infinite forwards running ${Animation};
  height: 2px;
  background-color: ${COLOR.BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  display: -webkit-box;
  overflow: hidden;
  margin-right: auto;
`

const DateSkeleton = styled.div``
