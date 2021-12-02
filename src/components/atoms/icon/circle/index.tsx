interface Props {
  size: number
}

export default function Circle({ size }: Props) {
  return (
    <svg
      data-testid={'circle-icon'}
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10.5" cy="10.5" r="10.5" fill="#D0021B" />
    </svg>
  )
}
