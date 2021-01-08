import styled from 'styled-components'

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

const Image = styled.img<{ src: string; alt: string }>`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  width: 100%;
  height: auto;
  vertical-align: bottom;
`
