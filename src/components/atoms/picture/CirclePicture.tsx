import React from 'react'

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
}

export function CirclePicture({ src, alt, width = 100, height = 100 }: Props) {
  return (
    <div
      style={
        {
          '--w': `${width}px`,
          '--h': `${height}px`,
        } as React.CSSProperties
      }
      className="overflow-hidden rounded-full w-(--w) h-(--h)"
    >
      <img src={src} alt={alt} className="block h-full w-full object-cover" />
    </div>
  )
}
