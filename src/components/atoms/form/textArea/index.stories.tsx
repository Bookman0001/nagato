import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'

import TextArea from './'
import { COLOR } from 'src/theme/constants'

export default {
  title: 'form/TextArea',
  component: TextArea,
} as Meta

const Template: React.VFC<{}> = () => {
  const [text, setText] = useState<string>('')

  return (
    <>
      <TextArea
        defaultValue={''}
        placeholder={'add place holder'}
        onChange={(e) => setText(e.target.value)}
      />
      <Container>属性値:{text}</Container>
    </>
  )
}

const Error: React.VFC<{}> = () => {
  const [text, setText] = useState<string>('')

  return (
    <>
      <TextArea
        hasError
        defaultValue={''}
        placeholder={'add place holder'}
        onChange={(e) => setText(e.target.value)}
      />
      <Container>属性値:{text}</Container>
    </>
  )
}

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: ${COLOR.GRAY};
`

export const Default = Template.bind({})

export const ErrorStatus = Error.bind({})
