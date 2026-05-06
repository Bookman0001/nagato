import React, { LabelHTMLAttributes } from 'react'

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export function Label({ children, ...rest }: Props) {
  return (
    <label className={'block text-sm font-bold'} {...rest}>
      {children}
    </label>
  )
}
