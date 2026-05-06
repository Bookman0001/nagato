import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  type?: 'email' | 'text'
}

export const Input = React.forwardRef<HTMLInputElement, Props>(function Element(
  { hasError = false, type = 'text', ...props }: Props,
  ref
) {
  return (
    <input
      {...props}
      type={type}
      ref={ref}
      className={`w-full flex-1 h-10 text-base indent-1.25 rounded-lg
        ${
          hasError
            ? 'border-2 border-solid border-warning'
            : 'border border-solid border-white'
        }
        `}
    />
  )
})
