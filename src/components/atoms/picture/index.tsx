import styled, { css } from 'styled-components'

interface Props {
  src: string
  alt: string
  isCircle?: boolean
  width?: number
  height?: number
}

export default function CirclePicture({
  src,
  alt,
  isCircle = false,
  width = 100,
  height = 100,
}: Props) {
  return (
    <Container>
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        isCircle={isCircle}
      />
    </Container>
  )
}

const Container = styled.div`
  border-radius: 100%;
`

const Image = styled.img<{ src: string; alt: string; isCircle: boolean }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  ${(props) =>
    props.isCircle &&
    css`
      border-radius: 100%;
    `}
`
