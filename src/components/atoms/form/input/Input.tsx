import { InputHTMLAttributes, Ref } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  ref?: Ref<HTMLInputElement>
  type?: 'email' | 'text'
}

export function Input({
  hasError = false,
  type = 'text',
  ref,
  ...props
}: Props) {
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
}
