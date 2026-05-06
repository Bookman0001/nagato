interface Props {
  size: number
}

export function Search({ size }: Props) {
  const height = size + 5

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 118 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={'search-icon'}
      className="[&_line]:stroke-white [&_circle]:stroke-white"
    >
      <line
        x1="110.932"
        y1="117.804"
        x2="82.8037"
        y2="88.0683"
        // 元々の stroke={color.BLACK} は Tailwind のクラスで上書きされる
        className="stroke-black"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle
        cx="50"
        cy="50"
        r="44"
        className="stroke-black"
        strokeWidth="12"
      />
    </svg>
  )
}
