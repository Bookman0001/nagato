import styled, { css, keyframes } from 'styled-components'

import { COLOR } from 'src/theme/constants'

export default function Skeleton() {
  return (
    <Wrapper>
      <SubTitleSkeleton data-testid={'title'} />
      <DateSkeleton data-testid={'date'} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
`

const Animation = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(100%)
  }
`

const skeleton = css`
  height: 30px;
  background-color: ${COLOR.GRAY};
  position: relative;
  overflow: hidden;
  :before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    position: absolute;
    top: 0;
    left: 0;
    animation: ${Animation} 1.2s linear infinite;
  }
`

const SubTitleSkeleton = styled.div`
  width: 100%;
  margin-right: auto;
  ${skeleton}
`

const DateSkeleton = styled.div`
  width: 13rem;
  margin-left: 2rem;
  ${skeleton}
`
