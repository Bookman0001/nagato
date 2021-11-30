interface Props {
  size: number
}

export default function Mail({ size }: Props) {
  return (
    <svg
      data-testid={'star-icon'}
      width={size}
      height={size - 2}
      viewBox="0 0 31 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_2_2)">
        <path
          d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z"
          fill="#DB235C"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_2_2"
          x="-3.24138"
          y="-4"
          width="37.4828"
          height="36.0398"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
