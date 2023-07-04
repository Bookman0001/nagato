import styled from 'styled-components'

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
}

export function CirclePicture({ src, alt, width = 100, height = 100 }: Props) {
  return (
    <Container width={width} height={height}>
      <Image src={src} alt={alt} />
    </Container>
  )
}

const Container = styled.div<{ width: number; height: number }>`
  border-radius: 100%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`

const Image = styled.img<{ src: string; alt: string }>`
  width: 100%;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`
