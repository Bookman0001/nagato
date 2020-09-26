import styled from 'styled-components'

interface Props {
  src: string
  alt: string
}

export default function Background({ src, alt }: Props) {
  return (
    <Container>
      <Image src={src} alt={alt} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const Image = styled.img<{ src: string; alt: string }>`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  width: 100%;
  height: auto;
`
