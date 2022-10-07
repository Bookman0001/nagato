import React from 'react'
import { SWRConfig } from 'swr'

interface Props {
  children: React.ReactNode
}

export default function SwrConfig({ children }: Props) {
  return <SWRConfig value={{ revalidateOnFocus: false }}>{children}</SWRConfig>
}
