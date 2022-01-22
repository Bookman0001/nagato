import styled from 'styled-components'

import { COLOR } from 'src/theme/constants'

interface Props {
  size: number
}

export function Mail({ size }: Props) {
  return (
    <Svg
      data-testid={'mail-icon'}
      width={size}
      height={size}
      viewBox="0 0 243 178"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="235"
        height="170"
        rx="16"
        fill={COLOR.WHITE}
        stroke={COLOR.BLACK}
        strokeWidth="8"
      />
      <line
        x1="118.222"
        y1="122.122"
        x2="234.222"
        y2="10.1224"
        stroke={COLOR.BLACK}
        strokeWidth="8"
      />
      <line
        x1="9.80329"
        y1="10.1467"
        x2="123.803"
        y2="122.147"
        stroke={COLOR.BLACK}
        strokeWidth="8"
      />
    </Svg>
  )
}

const Svg = styled.svg`
  rect {
    fill: ${COLOR.BLACK};
    stroke: ${COLOR.WHITE};
  }
  line {
    stroke: ${COLOR.WHITE};
  }
`
