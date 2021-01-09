import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import ParagraphContents from './'

export default {
  title: 'ParagraphContents',
  component: ParagraphContents,
} as Meta

const Template: React.VFC<{}> = () => (
  <ParagraphContents>
    ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
  </ParagraphContents>
)

export const Default = Template.bind({})
