import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import Picture from './'

export default {
  title: 'Picture',
  component: Picture,
} as Meta

const Template: React.VFC<{}> = () => (
  <>
    <Picture
      src={'https://placehold.jp/100x100.png'}
      alt="alt属性です"
      width={100}
      height={100}
    />
  </>
)

const CircleTemplate: React.VFC<{}> = () => (
  <>
    <Picture
      src={'https://placehold.jp/100x100.png'}
      alt="alt属性です"
      width={100}
      height={100}
      isCircle
    />
  </>
)

export const Default = Template.bind({})

export const CircleMode = CircleTemplate.bind({})
