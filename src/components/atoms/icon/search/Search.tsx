import styled from 'styled-components'

import { color } from 'src/theme/constants'

interface Props {
  size: number
}

export function Search({ size }: Props) {
  const height = size + 5
  return (
    <Svg
      width={size}
      height={height}
      viewBox="0 0 118 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={'search-icon'}
    >
      <line
        x1="110.932"
        y1="117.804"
        x2="82.8037"
        y2="88.0683"
        stroke={color.BLACK}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="50" cy="50" r="44" stroke={color.BLACK} strokeWidth="12" />
    </Svg>
  )
}

const Svg = styled.svg`
  circle {
    stroke: ${color.WHITE};
  }
  line {
    stroke: ${color.WHITE};
  }
`
