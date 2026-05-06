import React from 'react'

interface Props {
  children: React.ReactNode
}

export function Title({ children }: Props) {
  return (
    <h2 className={'flex justify-center items-center leading-normal text-4xl'}>
      {children}
    </h2>
  )
}
