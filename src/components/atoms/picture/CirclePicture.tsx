import styled, { css } from 'styled-components'

interface Props {
  src: string
  alt: string
  isCircle?: boolean
  width?: number
  height?: number
}

export function CirclePicture({
  src,
  alt,
  isCircle = false,
  width = 100,
  height = 100,
}: Props) {
  return (
    <Container width={width} height={height}>
      <Image src={src} alt={alt} isCircle={isCircle} role={'img'} />
    </Container>
  )
}

const Container = styled.div<{ width: number; height: number }>`
  border-radius: 100%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`

const Image = styled.img<{ src: string; alt: string; isCircle: boolean }>`
  width: 100%;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  ${(props) =>
    props.isCircle &&
    css`
      border-radius: 100%;
    `}
`
