interface Props {
  size: number
}

export function Rectangle({ size }: Props) {
  return (
    <svg
      data-testid={'rectangle-icon'}
      width={size}
      height={size + 100}
      viewBox="0 0 306 405"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M255.979 127.021L255.006 36.0243L305 1.89351V90.4011L255.979 127.021Z"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <rect
        x="163"
        y="37"
        width="91"
        height="91"
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M165.43 35L218.792 1H302.851L254.71 35H165.43Z"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M3.4304 311L56.7915 277H140.851L92.7098 311H3.4304Z"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <rect
        x="1"
        y="313"
        width="91"
        height="91"
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M93.9789 403.021L93.0057 312.024L143 277.894V366.401L93.9789 403.021Z"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M3.4304 192L56.7915 158H140.851L92.7098 192H3.4304Z"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <rect
        x="1"
        y="194"
        width="91"
        height="91"
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M93.9789 284.021L93.0057 193.024L143 158.894V247.401L93.9789 284.021Z"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M165.43 192L218.792 158H302.851L254.71 192H165.43Z"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      <rect
        x="163"
        y="194"
        width="91"
        height="91"
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M255.979 284.021L255.006 193.024L305 158.894V247.401L255.979 284.021Z"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  )
}
