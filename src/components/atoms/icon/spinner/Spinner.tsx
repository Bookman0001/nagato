import styled, { keyframes } from 'styled-components'

import { COLOR } from 'src/theme/constants'

export function Spinner() {
  return (
    <SpinnerDesgin role={'status'}>
      <svg viewBox="0 0 30 30">
        <circle
          className="path"
          cx="15"
          cy="15"
          r="10"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </SpinnerDesgin>
  )
}

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`

const SpinnerDesgin = styled.div`
  animation: ${rotate} 2s linear infinite;
  z-index: 2;
  position: absolute;
  width: 30px;
  height: 30px;
  circle {
    stroke: ${COLOR.WHITE};
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`
