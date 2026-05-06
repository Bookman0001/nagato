import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className={
        'h-10 px-4 flex justify-center items-center text-xl border-2 border-solid border-white rounded-lg cursor-pointer hover:opacity-90 disabled:opacity-70'
      }
    >
      {children}
    </button>
  )
}
