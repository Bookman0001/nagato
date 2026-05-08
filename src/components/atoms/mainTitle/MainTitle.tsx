import React from 'react'

interface Props {
  children: React.ReactNode
}

export function MainTitle({ children }: Props) {
  return (
    <h1 className={'flex justify-center items-center text-4xl font-bold'}>
      {children}
    </h1>
  )
}
