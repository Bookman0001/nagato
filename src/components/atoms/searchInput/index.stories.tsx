import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'

import SearchInput from './'

export default {
  title: 'SearchInput',
  component: SearchInput,
} as Meta

const Template: React.VFC<{}> = () => {
  const [text, setText] = useState<string>('')

  return (
    <div>
      <SearchInput
        defaultValue={''}
        placeholder={'add place holder'}
        onChange={(e) => setText(e.target.value)}
      />
      <Container>{text}</Container>
    </div>
  )
}

const Container = styled.div`
  padding: 20px 0;
`

export const Default = Template.bind({})
