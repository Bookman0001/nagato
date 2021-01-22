import styled from 'styled-components'
import Link from 'next/link'

import { BreadCrumbContents } from 'types'

interface Props {
  contents: BreadCrumbContents
}

export default function BreadCrumb({ contents }: Props) {
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
