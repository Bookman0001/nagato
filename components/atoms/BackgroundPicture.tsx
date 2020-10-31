import Image from 'next/image'

interface Props {
  src: string
  alt: string
}

export default function Background({ src, alt }: Props) {
  return (
    <>
      <Image src={src} alt={alt} width={1024} height={400} />
    </>
  )
}
