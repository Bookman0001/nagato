import { VFC } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { CirclePicture } from './'

export default {
  title: 'CirclePicture',
  component: CirclePicture,
} as Meta

const Template: VFC = () => (
  <>
    <CirclePicture
      src={'https://placehold.jp/100x100.png'}
      alt="alt属性です"
      width={100}
      height={100}
    />
  </>
)

const CircleTemplate: VFC = () => (
  <>
    <CirclePicture
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
