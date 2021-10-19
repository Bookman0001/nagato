import styled from 'styled-components'

import Skeleton from 'src/components/molecures/skeleton'
import { DEVICE_WIDTH } from 'src/theme/constants'

interface Props {
  itemCount: number
}

export default function SkeletonArticles({ itemCount }: Props) {
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
  max-width: 768px;
  min-height: calc(100vh - 50px - 60px);
  padding: 50px 0 0 0;
  margin: 0 auto;
  @media (max-width: ${DEVICE_WIDTH.TABLET}) {
    padding: 50px 30px 0;
  }
`
