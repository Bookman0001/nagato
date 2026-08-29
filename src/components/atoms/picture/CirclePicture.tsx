import Image from 'next/image'

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
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block h-full w-full object-cover"
      />
    </div>
  )
}
