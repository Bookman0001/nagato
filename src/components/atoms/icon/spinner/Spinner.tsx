export function Spinner() {
  return (
    <div
      role="status"
      className="absolute z-10 h-7.5 w-7.5 animate-[spin_2s_linear_infinite]"
    >
      <svg viewBox="0 0 30 30" className="h-full w-full">
        <circle
          cx="15"
          cy="15"
          r="10"
          fill="none"
          strokeWidth="5"
          className="animate-spinner-dash stroke-white"
        />
      </svg>
    </div>
  )
}
