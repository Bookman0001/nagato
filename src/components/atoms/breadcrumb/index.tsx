import styled from 'styled-components'
import Link from 'next/link'

import { BreadcrumbContents } from 'src/types'

interface Props {
  contents: BreadcrumbContents
}

export default function Breadcrumb({ contents }: Props) {
  const contentsLength = contents.length
  return (
    <Container>
      {contents.map((item, index) => {
        return (
          <Link href={item.link} key={index}>
            <Item>
              {item.label}
              {contentsLength !== index && <span>{'>'}</span>}
            </Item>
          </Link>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const Item = styled.div`
  cursor: pointer;
  span {
    margin: 0 5px;
  }
`
