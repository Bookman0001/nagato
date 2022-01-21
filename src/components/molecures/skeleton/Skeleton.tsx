import styled, { css, keyframes } from 'styled-components'

export function Skeleton() {
  return (
    <Wrapper>
      <SubTitleSkeleton data-testid={'title'} />
      <DateSkeleton data-testid={'date'} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 4rem;
`

const Animation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`

const skeleton = css`
  height: 30px;
  background-color: #dcdcdc;
  position: relative;
  overflow: hidden;
  @media (prefers-color-scheme: dark) {
    background-color: #696969;
  }
  ::before {
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
