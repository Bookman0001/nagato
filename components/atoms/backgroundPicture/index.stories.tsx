import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import BackgroundPicture from './'

export default {
  title: 'BackgroundPicture',
  component: BackgroundPicture,
} as Meta

const Template: React.VFC<{}> = () => (
  <>
    <BackgroundPicture
      src="https://placehold.jp/600x400.png"
      alt="alt属性です"
    />
  </>
)

export const Default = Template.bind({})
