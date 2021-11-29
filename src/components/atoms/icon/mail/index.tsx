interface Props {
  size: number
}

export default function Mail({ size }: Props) {
  return (
    <svg
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
        fill="#21A2B8"
        stroke="black"
        strokeWidth="8"
      />
      <line
        x1="118.222"
        y1="122.122"
        x2="234.222"
        y2="10.1224"
        stroke="black"
        strokeWidth="8"
      />
      <line
        x1="9.80329"
        y1="10.1467"
        x2="123.803"
        y2="122.147"
        stroke="black"
        strokeWidth="8"
      />
    </svg>
  )
}
