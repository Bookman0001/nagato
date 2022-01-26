import styled from 'styled-components'

import { Skeleton } from 'src/components/molecures/skeleton'

interface Props {
  itemCount: number
}

export function Skeletons({ itemCount }: Props) {
  return (
    <Container>
      {[...Array(itemCount)].map((_, i) => {
        return (
          <div key={i}>
            <Skeleton />
          </div>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  max-width: 600px;
  min-height: calc(100vh - 50px - 60px);
  margin: 0 auto;
`
