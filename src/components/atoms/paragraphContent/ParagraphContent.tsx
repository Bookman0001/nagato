import React from 'react'

interface Props {
  children: React.ReactNode
}

export function ParagraphContent({ children }: Props) {
  return <p className={'leading-relaxed'}> {children}</p>
}
